export const overlayColors = {
    // === Restorations ===
    restoration: {
        Composite: "rgba(51, 165, 222, 0.6)",          // Blue
        Ceramic: "rgba(127, 51, 222, 0.6)",            // Purple
        Amalgam: "rgba(130, 136, 143, 0.6)",           // Gray
        Gold: "rgba(255, 208, 10, 0.6)",               // Yellow/Gold
        "Non-Precious Metal": "rgba(176, 185, 195, 0.6)", // Steel-like
        Temporary: "rgba(96, 232, 234, 0.6)",          // Cyan
        Unknown: "rgba(130, 165, 222, 0.6)"            // Light blue
    },

    // === Pathology ===
    pathology: {
        Decay: "rgba(255, 122, 122, 0.5)",             // Red
        Fracture: "#ff0000",                           // Bright red line
        Discoloration: {
            Gray: "rgba(210, 210, 210, 0.6)",
            Red: "rgba(250, 225, 224, 0.6)",
            Yellow: "rgba(255, 248, 218, 0.6)"
        },
        Wear: {
            even: "rgba(255, 255, 255, 0.8)",
            odd: "rgba(230, 230, 230, 0.8)"
        }
    },

    // === Root canal / pulp ===
    root_canal: {
        Monitor: "rgba(255, 208, 12, 0.6)",            // Yellow
        Urgent: "rgba(225, 56, 48, 0.6)",              // Red
        Necrotic: "rgba(78, 85, 101, 0.6)",            // Dark gray
        "Root Canal Treatment": "rgba(74, 144, 226, 0.6)" // Blue
    },

    // === Periodontal ===
    periodontal: {
        probingArea: "rgba(51, 166, 222, 0.5)",
        probingLine: "#33a5de",
        gingivalMargin: "#e13830"
    }
}
