// apps/dental_charting/dental_charting/public/js/dental_charting.js

class CanvasDentalChart {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.chartData = {};
        this.selectedTooth = null;
        this.selectedTool = null;
        this.scale = 1.0;
        this.offset = { x: 0, y: 0 };

        this.initCanvas();
        this.setupEventListeners();
    }

    initCanvas() {
        // Set canvas size
        this.canvas.width = 1200;
        this.canvas.height = 800;

        // Initial render
        this.render();
    }

    setupEventListeners() {
        // Mouse events for interaction
        this.canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('wheel', (e) => this.handleZoom(e));

        // Touch events for mobile
        this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e));
        this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e));
    }

    render() {
        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Save context state
        this.ctx.save();

        // Apply transformations
        this.ctx.translate(this.offset.x, this.offset.y);
        this.ctx.scale(this.scale, this.scale);

        // Draw dental chart
        this.drawUpperJaw();
        this.drawLowerJaw();
        this.drawLabels();

        // Restore context
        this.ctx.restore();
    }

    drawUpperJaw() {
        const yBase = 100;

        // Permanent teeth
        this.drawToothRow(TOOTH_MAPPING.PERMANENT_UPPER, 200, yBase, 'upper', 'permanent');

        // Deciduous teeth  
        this.drawToothRow(TOOTH_MAPPING.DECIDUOUS_UPPER, 200, yBase + 80, 'upper', 'deciduous');

        // Jaw label
        this.ctx.fillStyle = '#333';
        this.ctx.font = '16px Arial';
        this.ctx.fillText('Upper Jaw', 100, yBase - 20);
    }

    drawLowerJaw() {
        const yBase = 450;

        // Deciduous teeth
        this.drawToothRow(TOOTH_MAPPING.DECIDUOUS_LOWER, 200, yBase, 'lower', 'deciduous');

        // Permanent teeth
        this.drawToothRow(TOOTH_MAPPING.PERMANENT_LOWER, 200, yBase + 80, 'lower', 'permanent');

        // Jaw label
        this.ctx.fillStyle = '#333';
        this.ctx.font = '16px Arial';
        this.ctx.fillText('Lower Jaw', 100, yBase - 20);
    }

    drawToothRow(teeth, xStart, yBase, jaw, dentition) {
        teeth.forEach((toothNumber, index) => {
            const x = xStart + (index * 50);
            this.drawTooth(toothNumber, x, yBase, jaw, dentition);
        });
    }

    drawTooth(toothNumber, x, y, jaw, dentition) {
        const toothState = this.chartData[toothNumber] || {};
        const isSelected = this.selectedTooth === toothNumber;

        // Get tooth geometry
        const geometry = this.getToothGeometry(toothNumber, jaw, dentition);

        // Draw tooth outline
        this.drawToothOutline(x, y, geometry, toothState, isSelected);

        // Draw tooth number
        this.drawToothNumber(toothNumber, x, y);

        // Draw conditions and surfaces
        this.drawToothConditions(toothNumber, x, y, geometry, toothState);
    }

    drawToothOutline(x, y, geometry, toothState, isSelected) {
        this.ctx.save();

        // Set styles based on tooth state
        if (toothState.missing) {
            this.ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
            this.ctx.strokeStyle = '#999';
        } else if (toothState.crown) {
            this.ctx.fillStyle = 'rgba(255, 255, 100, 0.7)';
            this.ctx.strokeStyle = '#cc0';
        } else if (toothState.implant) {
            this.ctx.fillStyle = 'rgba(100, 255, 100, 0.7)';
            this.ctx.strokeStyle = '#0c0';
        } else {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            this.ctx.strokeStyle = isSelected ? '#007bff' : '#333';
        }

        this.ctx.lineWidth = isSelected ? 3 : 2;

        // Draw tooth shape based on geometry
        const points = geometry.points?.buccal || { left: 20, right: 30, center_offset: 0 };

        this.ctx.beginPath();
        this.ctx.moveTo(x + points.left, y);
        this.ctx.lineTo(x + points.right, y);
        this.ctx.lineTo(x + points.right + 5, y + 20);
        this.ctx.lineTo(x + points.right, y + 60);
        this.ctx.lineTo(x + points.left, y + 60);
        this.ctx.lineTo(x + points.left - 5, y + 20);
        this.ctx.closePath();

        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.restore();
    }

    drawToothNumber(toothNumber, x, y) {
        this.ctx.save();
        this.ctx.fillStyle = '#333';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(toothNumber, x + 25, y + 35);
        this.ctx.restore();
    }

    drawToothConditions(toothNumber, x, y, geometry, toothState) {
        if (!toothState.surfaces) return;

        Object.keys(toothState.surfaces).forEach(surface => {
            this.drawSurfaceCondition(x, y, geometry, surface, toothState.surfaces[surface]);
        });
    }

    drawSurfaceCondition(x, y, geometry, surface, condition) {
        this.ctx.save();

        // Set color based on condition
        let color = '#fff';
        let alpha = 0.3;

        switch (condition?.type) {
            case 'decay':
                color = DENTAL_CONSTANTS.COLORS.DECAY;
                alpha = 0.6;
                break;
            case 'filling':
                color = DENTAL_CONSTANTS.COLORS.FILLING_COMPOSIT;
                alpha = 0.5;
                break;
            case 'fracture':
                color = DENTAL_CONSTANTS.COLORS.FRACTURE_LINE;
                alpha = 0.8;
                break;
        }

        this.ctx.fillStyle = this.hexToRgba(color, alpha);

        // Draw surface area based on surface type
        this.drawSurfaceArea(x, y, geometry, surface);

        this.ctx.restore();
    }

    drawSurfaceArea(x, y, geometry, surface) {
        const surfacePaths = {
            buccal: () => {
                this.ctx.beginPath();
                this.ctx.moveTo(x + 15, y + 10);
                this.ctx.lineTo(x + 35, y + 10);
                this.ctx.lineTo(x + 37, y + 20);
                this.ctx.lineTo(x + 33, y + 50);
                this.ctx.lineTo(x + 17, y + 50);
                this.ctx.lineTo(x + 13, y + 20);
                this.ctx.closePath();
                this.ctx.fill();
            },
            lingual: () => {
                this.ctx.beginPath();
                this.ctx.moveTo(x + 15, y + 10);
                this.ctx.lineTo(x + 35, y + 10);
                this.ctx.lineTo(x + 33, y + 20);
                this.ctx.lineTo(x + 37, y + 50);
                this.ctx.lineTo(x + 13, y + 50);
                this.ctx.lineTo(x + 17, y + 20);
                this.ctx.closePath();
                this.ctx.fill();
            },
            occlusal: () => {
                this.ctx.beginPath();
                this.ctx.moveTo(x + 18, y + 15);
                this.ctx.lineTo(x + 32, y + 15);
                this.ctx.lineTo(x + 34, y + 25);
                this.ctx.lineTo(x + 30, y + 35);
                this.ctx.lineTo(x + 20, y + 35);
                this.ctx.lineTo(x + 16, y + 25);
                this.ctx.closePath();
                this.ctx.fill();
            },
            mesial: () => {
                this.ctx.beginPath();
                this.ctx.moveTo(x + 10, y + 15);
                this.ctx.lineTo(x + 20, y + 15);
                this.ctx.lineTo(x + 22, y + 25);
                this.ctx.lineTo(x + 18, y + 45);
                this.ctx.lineTo(x + 8, y + 45);
                this.ctx.lineTo(x + 8, y + 25);
                this.ctx.closePath();
                this.ctx.fill();
            },
            distal: () => {
                this.ctx.beginPath();
                this.ctx.moveTo(x + 30, y + 15);
                this.ctx.lineTo(x + 40, y + 15);
                this.ctx.lineTo(x + 42, y + 25);
                this.ctx.lineTo(x + 38, y + 45);
                this.ctx.lineTo(x + 32, y + 45);
                this.ctx.lineTo(x + 28, y + 25);
                this.ctx.closePath();
                this.ctx.fill();
            }
        };

        const drawFunction = surfacePaths[surface];
        if (drawFunction) {
            drawFunction();
        }
    }

    drawLabels() {
        this.ctx.save();
        this.ctx.fillStyle = '#666';
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'center';

        // Add any additional labels or annotations
        this.ctx.restore();
    }

    // Utility methods
    getToothGeometry(toothNumber, jaw, dentition) {
        const toothIndex = this.getToothIndex(toothNumber);
        return TOOTH_GEOMETRY[dentition.toUpperCase()]?.[jaw.toUpperCase()]?.[toothIndex] || {};
    }

    getToothIndex(toothNumber) {
        // Extract the position index from tooth number
        return parseInt(toothNumber) % 10;
    }

    hexToRgba(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    // Interaction handlers
    handleCanvasClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - this.offset.x) / this.scale;
        const y = (e.clientY - rect.top - this.offset.y) / this.scale;

        const clickedTooth = this.getToothAtPosition(x, y);
        if (clickedTooth) {
            this.selectTooth(clickedTooth);
        }
    }

    getToothAtPosition(x, y) {
        // Check all tooth positions
        const toothAreas = [
            { teeth: TOOTH_MAPPING.PERMANENT_UPPER, y: 100, jaw: 'upper', dentition: 'permanent' },
            { teeth: TOOTH_MAPPING.DECIDUOUS_UPPER, y: 180, jaw: 'upper', dentition: 'deciduous' },
            { teeth: TOOTH_MAPPING.DECIDUOUS_LOWER, y: 450, jaw: 'lower', dentition: 'deciduous' },
            { teeth: TOOTH_MAPPING.PERMANENT_LOWER, y: 530, jaw: 'lower', dentition: 'permanent' }
        ];

        for (const area of toothAreas) {
            for (let i = 0; i < area.teeth.length; i++) {
                const toothX = 200 + (i * 50);
                const toothY = area.y;

                if (x >= toothX && x <= toothX + 50 && y >= toothY && y <= toothY + 60) {
                    return area.teeth[i];
                }
            }
        }

        return null;
    }

    selectTooth(toothNumber) {
        this.selectedTooth = toothNumber;
        this.render(); // Re-render to show selection

        // Dispatch event for other components
        this.canvas.dispatchEvent(new CustomEvent('toothSelected', {
            detail: { toothNumber, toothData: this.chartData[toothNumber] }
        }));
    }

    handleMouseMove(e) {
        // Implement hover effects
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left - this.offset.x) / this.scale;
        const y = (e.clientY - rect.top - this.offset.y) / this.scale;

        // Update cursor based on what's under mouse
        const toothUnderMouse = this.getToothAtPosition(x, y);
        this.canvas.style.cursor = toothUnderMouse ? 'pointer' : 'default';
    }

    handleZoom(e) {
        e.preventDefault();

        const zoomIntensity = 0.1;
        const wheel = e.deltaY < 0 ? 1 : -1;
        const zoom = Math.exp(wheel * zoomIntensity);

        this.scale *= zoom;
        this.render();
    }

    handleTouchStart(e) {
        // Touch interaction for mobile
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            const x = (touch.clientX - rect.left - this.offset.x) / this.scale;
            const y = (touch.clientY - rect.top - this.offset.y) / this.scale;

            const clickedTooth = this.getToothAtPosition(x, y);
            if (clickedTooth) {
                this.selectTooth(clickedTooth);
            }
        }
    }

    handleTouchMove(e) {
        // Panning for mobile
        if (e.touches.length === 1) {
            e.preventDefault();
            // Implement panning logic
        }
    }

    // Public methods
    updateToothData(toothNumber, data) {
        this.chartData[toothNumber] = { ...this.chartData[toothNumber], ...data };
        this.render();
    }

    getChartData() {
        return { ...this.chartData };
    }

    loadChartData(data) {
        this.chartData = { ...data };
        this.render();
    }

    clearTooth(toothNumber) {
        delete this.chartData[toothNumber];
        this.render();
    }

    exportAsImage() {
        return this.canvas.toDataURL('image/png');
    }
}