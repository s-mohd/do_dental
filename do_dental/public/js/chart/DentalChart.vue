<template>
  <div class="dental-chart-container" :class="{ 'periodontal-mode': isPeriodontalMode }">
    <div class="chart-header m-3">
      <div class="action-tabs">
        <button
          v-for="action in actionOptions"
          :key="action.name"
          type="button"
          :class="{ active: selectedAction === action.name }"
          @click="selectAction(action.name)"
        >
          {{ action.label }}
        </button>
      </div>
      <div class="chart-meta">
        <span v-if="loading" class="chart-status">Loading…</span>
        <span v-else-if="loadError" class="chart-status warning">{{ loadErrorMessage }}</span>
        <button type="button" class="legend-button" @click="showLegend = true">Legend</button>
      </div>
    </div>

    <div class="chart-main">
      <div class="chart-body">
        <!-- All Jaws -->
        <div v-if="view === 'all'" class="all-jaws">
        <ul class="teeth-row">
          <li v-for="num in upperLeft" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              arch="upper"
              :invertY="false"
              projection="buccal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
          <li v-for="num in upperRight" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              arch="upper"
              :invertY="false"
              projection="buccal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
        </ul>

        <ul class="teeth-row">
          <li v-for="num in upperLeft" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              show-num="down"
              arch="upper"
              :invertY="false"
              projection="incisal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
          <li v-for="num in upperRight" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              show-num="down"
              arch="upper"
              :invertY="false"
              projection="incisal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
        </ul>

        <ul class="teeth-row">
          <li v-for="num in lowerLeft" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              show-num="up"
              arch="lower"
              :invertY="false"
              projection="incisal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
          <li v-for="num in lowerRight" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              show-num="up"
              arch="lower"
              :invertY="false"
              projection="incisal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
        </ul>

        <ul class="teeth-row">
          <li v-for="num in lowerLeft" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              arch="lower"
              :invertY="false"
              projection="buccal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
          <li v-for="num in lowerRight" :key="num">
            <ToothCanvas
              :view="view"
              :tooth-number="num"
              arch="lower"
              :invertY="false"
              projection="buccal"
              :condition="getToothCondition(num)"
              :pathology="getToothPathology(num)"
              :restorations="getToothRestorations(num)"
              :periodontal="getPeriodontal(num)"
              :previous-number="getNeighborNumber(num, -1)"
              :next-number="getNeighborNumber(num, 1)"
              :previous-periodontal="getNeighborPeriodontal(num, -1)"
              :next-periodontal="getNeighborPeriodontal(num, 1)"
              :show-pathology="layerIsActive('pathology')"
              :show-restorations="layerIsActive('restorations')"
              :show-periodontal="layerIsActive('periodontal')"
              :is-selected="isSelectedTooth(num)"
              @select="handleToothSelect"
            />
          </li>
        </ul>
        </div>

        <!-- Upper Jaw -->
        <div v-else-if="view === 'upper'" class="upper-jaw">
          <ul class="teeth-row">
            <li v-for="num in upperLeft" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="upper"
                :invertY="false"
                projection="buccal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
            <li v-for="num in upperRight" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="upper"
                :invertY="false"
                projection="buccal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
          </ul>
          <ul class="teeth-row">
            <li v-for="num in upperLeft" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="upper"
                :invertY="false"
                projection="incisal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
            <li v-for="num in upperRight" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="upper"
                :invertY="false"
                projection="incisal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
          </ul>
          <ul class="teeth-row">
            <li v-for="num in upperLeft" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                show-num="down"
                arch="upper"
                :invertY="true"
                projection="lingual"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
            <li v-for="num in upperRight" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                show-num="down"
                arch="upper"
                :invertY="true"
                projection="lingual"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
          </ul>
        </div>

        <!-- Lower Jaw -->
        <div v-else class="lower-jaw">
          <ul class="teeth-row">
            <li v-for="num in lowerLeft" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="lower"
                :invertY="true"
                projection="buccal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
            <li v-for="num in lowerRight" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="lower"
                :invertY="true"
                projection="buccal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
          </ul>
          <ul class="teeth-row">
            <li v-for="num in lowerLeft" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="lower"
                :invertY="false"
                projection="incisal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
            <li v-for="num in lowerRight" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                arch="lower"
                :invertY="false"
                projection="incisal"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
          </ul>
          <ul class="teeth-row">
            <li v-for="num in lowerLeft" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                show-num="down"
                :invertY="false"
                arch="lower"
                projection="lingual"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
            <li v-for="num in lowerRight" :key="num">
              <ToothCanvas
                :view="view"
                :tooth-number="num"
                show-num="down"
                :invertY="false"
                arch="lower"
                projection="lingual"
                :condition="getToothCondition(num)"
                :pathology="getToothPathology(num)"
                :restorations="getToothRestorations(num)"
                :periodontal="getPeriodontal(num)"
                :previous-number="getNeighborNumber(num, -1)"
                :next-number="getNeighborNumber(num, 1)"
                :previous-periodontal="getNeighborPeriodontal(num, -1)"
                :next-periodontal="getNeighborPeriodontal(num, 1)"
                :show-pathology="layerIsActive('pathology')"
                :show-restorations="layerIsActive('restorations')"
                :show-periodontal="layerIsActive('periodontal')"
                :is-selected="isSelectedTooth(num)"
                @select="handleToothSelect"
              />
            </li>
          </ul>
        </div>
      </div>

      <transition name="panel-slide">
        <aside
          v-if="isPeriodontalMode && selectedTooth && periodontalPanelVisible"
          class="periodontal-panel"
          ref="periodontalPanelRef"
          tabindex="0"
          @keydown="handlePeriodontalKeyDown"
        >
          <header class="panel-header">
            <button type="button" class="nav-button" :disabled="!hasPreviousTooth" @click="goToPreviousTooth">‹</button>
            <div class="panel-title">
              <span class="label">Tooth</span>
              <strong>{{ selectedTooth }}</strong>
            </div>
            <div class="panel-actions">
              <button type="button" class="nav-button" :disabled="!hasNextTooth" @click="goToNextTooth">›</button>
              <button type="button" class="panel-close" @click="hidePeriodontalPanel">×</button>
            </div>
          </header>

          <section class="site-grid">
            <button
              v-for="site in panelSites"
              :key="`${site.variant}-${site.id}`"
              type="button"
              :class="{ active: isActiveSite(site) }"
              @click="selectPeriodontalSite(site)"
            >
              <span class="site-label">{{ siteDisplayLabel(site) }}</span>
              <small class="site-summary">{{ periodontalSiteSummary(selectedTooth, site) }}</small>
            </button>
          </section>

          <section class="measurement-section">
            <label>
              <span>Probing depth (0-9 mm)</span>
              <input
                type="number"
                min="0"
                max="9"
                step="1"
                inputmode="numeric"
                data-field="depth"
                :value="currentPeriodontalMeasurement.depth"
                @input="setCurrentSiteMeasurement('depth', $event.target.value)"
                @keyup.enter="confirmPeriodontalEntry"
              />
            </label>
            <label>
              <span>Gingival margin (mm)</span>
              <input
                type="number"
                min="-12"
                max="12"
                step="0.5"
                inputmode="decimal"
                data-field="margin"
                :value="currentPeriodontalMeasurement.margin"
                @input="setCurrentSiteMeasurement('margin', $event.target.value)"
                @keyup.enter="confirmPeriodontalEntry"
              />
            </label>
          </section>

          <section class="flags-section">
            <label v-for="flag in PERIODONTAL_FLAGS" :key="flag.key" class="flag-toggle">
              <input
                type="checkbox"
                :checked="Boolean(currentPeriodontalMeasurement[flag.key])"
                @change="toggleCurrentSiteFlag(flag.key)"
              />
              <span>{{ flag.label }}</span>
            </label>
        </section>

        <section class="panel-footer">
          <label class="auto-toggle">
            <input type="checkbox" v-model="periodontalAutoAdvance" />
            <span>Automatic sequential probing</span>
          </label>
          <div class="footer-actions">
            <button type="button" class="secondary" @click="goToNextSite">Next Site</button>
            <button type="button" class="primary" @click="goToNextTooth">Next Tooth</button>
            <button
              type="button"
              class="primary"
              :disabled="savingPeriodontal || !currentPatientId || !teethData.chart?.name"
              @click="submitPeriodontalTest"
            >
              {{ savingPeriodontal ? "Saving…" : "Save Test" }}
            </button>
          </div>
          <p v-if="periodontalSaveMessage" class="panel-hint">{{ periodontalSaveMessage }}</p>
        </section>
      </aside>
    </transition>

      <transition name="panel-slide">
        <aside
          v-if="isConditionMode && conditionPanelVisible && conditionTooth"
          class="action-panel condition-panel"
        >
          <header class="panel-header">
            <div>
              <h3 class="panel-title">Tooth Condition</h3>
              <p class="panel-subtitle">Tooth {{ conditionTooth }}</p>
            </div>
            <button
              type="button"
              class="panel-close"
              @click="closeConditionPanel"
              aria-label="Close condition panel"
            >
              ×
            </button>
          </header>
          <section class="panel-body">
            <div v-if="activeConditionEntry" class="existing-list">
              <h4>Existing</h4>
              <p>{{ summariseCondition(activeConditionEntry) }}</p>
            </div>

            <div class="form-field">
              <label for="condition-state">State</label>
              <select id="condition-state" v-model="conditionForm.state">
                <option value="">Select</option>
                <option
                  v-for="option in CONDITION_STATE_OPTIONS"
                  :key="`condition-state-${option}`"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>

            <div class="form-field">
              <label for="eruption-status">Eruption Status</label>
              <select id="eruption-status" v-model="conditionForm.eruption_status">
                <option value="">Select</option>
                <option
                  v-for="option in ERUPTION_STATUS_OPTIONS"
                  :key="`eruption-status-${option}`"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>

            <div class="form-field">
              <label for="condition-mobility">Mobility</label>
              <input
                id="condition-mobility"
                type="number"
                min="0"
                max="9"
                step="1"
                v-model="conditionForm.mobility"
                placeholder="Enter a number"
              />
            </div>

            <div class="form-field">
              <label for="condition-furcation">Furcation</label>
              <input
                id="condition-furcation"
                type="number"
                min="0"
                max="9"
                step="1"
                v-model="conditionForm.furcation"
                placeholder="Enter a number"
              />
            </div>

            <div class="form-field">
              <label for="condition-notes">Notes</label>
              <textarea
                id="condition-notes"
                rows="3"
                v-model="conditionForm.condition_notes"
                placeholder="Add notes (optional)"
              ></textarea>
            </div>

            <p v-if="conditionError" class="panel-error">{{ conditionError }}</p>
          </section>
          <footer class="panel-footer">
            <button type="button" class="secondary" @click="closeConditionPanel">Cancel</button>
            <button
              type="button"
              class="primary"
              :disabled="!canSubmitCondition || savingCondition"
              @click="submitCondition"
            >
              {{ savingCondition ? "Saving…" : "Save Condition" }}
            </button>
          </footer>
        </aside>
      </transition>

      <transition name="panel-slide">
        <aside
          v-if="isPathologyMode && pathologyPanelVisible && pathologyTooth"
          class="action-panel pathology-panel"
        >
          <header class="panel-header">
            <div>
              <h3 class="panel-title">Pathology</h3>
              <p class="panel-subtitle">Tooth {{ pathologyTooth }}</p>
            </div>
            <button
              type="button"
              class="panel-close"
              @click="closePathologyPanel"
              aria-label="Close pathology panel"
            >
              ×
            </button>
          </header>
          <section class="panel-body">
            <div v-if="activePathologyEntries.length" class="existing-list">
              <h4>Existing</h4>
              <ul>
                <li
                  v-for="(entry, idx) in activePathologyEntries"
                  :key="`pathology-${idx}`"
                  class="existing-item"
                >
                  <span>{{ summarisePathology(entry) }}</span>
                  <span class="item-actions">
                    <button type="button" class="text-button" @click="editPathology(entry)">Edit</button>
                    <button type="button" class="text-button danger" @click="deletePathology(entry)">Delete</button>
                  </span>
                </li>
              </ul>
            </div>

            <div class="form-field">
              <label for="pathology-type">Pathology Type</label>
              <select id="pathology-type" v-model="pathologyForm.pathology_type">
                <option value="">Select</option>
                <option
                  v-for="option in PATHOLOGY_TYPE_OPTIONS"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>

            <div v-if="pathologyForm.pathology_type === 'Decay'" class="form-section">
              <div class="form-field">
                <label for="decay-stage">Decay Stage</label>
                <select id="decay-stage" v-model="pathologyForm.decay_stage">
                  <option value="">Select</option>
                  <option
                    v-for="option in DECAY_STAGE_OPTIONS"
                    :key="`decay-stage-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label for="decay-cavitation">Cavitation</label>
                <select id="decay-cavitation" v-model="pathologyForm.cavitation">
                  <option value="">Select</option>
                  <option
                    v-for="option in CAVITATION_OPTIONS"
                    :key="`cavitation-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div
                class="form-field"
                v-if="pathologyForm.cavitation === 'Cavitation'"
              >
                <label for="decay-pulp">Pulp</label>
                <select id="decay-pulp" v-model="pathologyForm.pulp">
                  <option value="">Select</option>
                  <option
                    v-for="option in PULP_OPTIONS"
                    :key="`pulp-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label for="decay-level">Decay Level</label>
                <select id="decay-level" v-model="pathologyForm.decay_level">
                  <option value="">Select</option>
                  <option
                    v-for="option in DECAY_LEVEL_OPTIONS"
                    :key="`decay-level-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label>Decay Surfaces</label>
                <div v-if="surfaceOptions.length" class="surface-grid">
                  <label
                    v-for="surface in surfaceOptions"
                    :key="`decay-surface-${surface.value}`"
                    :class="{ selected: pathologyForm.decay_surfaces.includes(surface.value) }"
                  >
                    <input
                      type="checkbox"
                      :value="surface.value"
                      v-model="pathologyForm.decay_surfaces"
                    />
                    <span>{{ surface.label }}</span>
                  </label>
                </div>
                <p v-else-if="surfacesLoading" class="field-hint">Loading surfaces…</p>
                <p v-else class="field-hint">Define tooth surfaces to pick specific zones.</p>
              </div>
            </div>

            <div v-if="pathologyForm.pathology_type === 'Fracture'" class="form-section">
              <div class="form-field">
                <label for="fracture-type">Fracture Type</label>
                <select id="fracture-type" v-model="pathologyForm.fracture_type">
                  <option value="">Select</option>
                  <option
                    v-for="option in FRACTURE_TYPE_OPTIONS"
                    :key="`fracture-type-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label for="fracture-position">Fracture Position</label>
                <select
                  id="fracture-position"
                  v-model="pathologyForm.fracture_position"
                >
                  <option value="">Select</option>
                  <option
                    v-for="option in FRACTURE_POSITION_OPTIONS"
                    :key="`fracture-position-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <div v-if="pathologyForm.pathology_type === 'Tooth Wear'" class="form-section">
              <div class="form-field">
                <label for="wear-type">Wear Type</label>
                <select id="wear-type" v-model="pathologyForm.wear_type">
                  <option value="">Select</option>
                  <option
                    v-for="option in WEAR_TYPE_OPTIONS"
                    :key="`wear-type-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label>Wear Surfaces</label>
                <div v-if="surfaceOptions.length" class="surface-grid">
                  <label
                    v-for="surface in surfaceOptions"
                    :key="`wear-surface-${surface.value}`"
                    :class="{ selected: pathologyForm.wear_surfaces.includes(surface.value) }"
                  >
                    <input
                      type="checkbox"
                      :value="surface.value"
                      v-model="pathologyForm.wear_surfaces"
                    />
                    <span>{{ surface.label }}</span>
                  </label>
                </div>
                <p v-else-if="surfacesLoading" class="field-hint">Loading surfaces…</p>
                <p v-else class="field-hint">Define tooth surfaces to pick specific zones.</p>
              </div>
            </div>

            <div v-if="pathologyForm.pathology_type === 'Discoloration'" class="form-section">
              <div class="form-field">
                <label for="discoloration-type">Discoloration Type</label>
                <select
                  id="discoloration-type"
                  v-model="pathologyForm.discoloration_type"
                >
                  <option value="">Select</option>
                  <option
                    v-for="option in DISCOLORATION_TYPE_OPTIONS"
                    :key="`discoloration-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <div class="form-field">
              <label for="pathology-notes">Notes</label>
              <textarea
                id="pathology-notes"
                rows="3"
                v-model="pathologyForm.notes"
                placeholder="Add notes (optional)"
              ></textarea>
            </div>

            <p v-if="pathologyError" class="panel-error">{{ pathologyError }}</p>
          </section>
          <footer class="panel-footer">
            <button type="button" class="secondary" @click="closePathologyPanel">Cancel</button>
            <button
              type="button"
              class="primary"
              :disabled="!canSubmitPathology || savingPathology"
              @click="submitPathology"
            >
              {{ savingPathology ? "Saving…" : "Save Pathology" }}
            </button>
          </footer>
        </aside>
      </transition>

      <transition name="panel-slide">
        <aside
          v-if="isRestorationMode && restorationPanelVisible && restorationTooth"
          class="action-panel restoration-panel"
        >
          <header class="panel-header">
            <div>
              <h3 class="panel-title">Restoration</h3>
              <p class="panel-subtitle">Tooth {{ restorationTooth }}</p>
            </div>
            <button
              type="button"
              class="panel-close"
              @click="closeRestorationPanel"
              aria-label="Close restoration panel"
            >
              ×
            </button>
          </header>
          <section class="panel-body">
            <div v-if="activeRestorationEntries.length" class="existing-list">
              <h4>Existing</h4>
              <ul>
                <li
                  v-for="(entry, idx) in activeRestorationEntries"
                  :key="`restoration-${idx}`"
                  class="existing-item"
                >
                  <span>{{ summariseRestoration(entry) }}</span>
                  <span class="item-actions">
                    <button type="button" class="text-button" @click="editRestoration(entry)">Edit</button>
                    <button type="button" class="text-button danger" @click="deleteRestoration(entry)">Delete</button>
                  </span>
                </li>
              </ul>
            </div>

            <div class="form-field">
              <label for="restoration-type">Restoration Type</label>
              <select
                id="restoration-type"
                v-model="restorationForm.restoration_type"
              >
                <option value="">Select</option>
                <option
                  v-for="option in RESTORATION_TYPE_OPTIONS"
                  :key="`rest-type-${option}`"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>

            <template v-if="showRestorationDetailFields">
              <div class="form-field">
                <label for="restoration-material">Material</label>
                <select
                  id="restoration-material"
                  v-model="restorationForm.material"
                >
                  <option value="">Select</option>
                  <option
                    v-for="option in RESTORATION_MATERIAL_OPTIONS"
                    :key="`rest-material-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label>Surfaces</label>
                <div v-if="surfaceOptions.length" class="surface-grid">
                  <label
                    v-for="surface in surfaceOptions"
                    :key="`rest-surface-${surface.value}`"
                    :class="{ selected: restorationForm.surfaces.includes(surface.value) }"
                  >
                    <input
                      type="checkbox"
                      :value="surface.value"
                      v-model="restorationForm.surfaces"
                    />
                    <span>{{ surface.label }}</span>
                  </label>
                </div>
                <p v-else-if="surfacesLoading" class="field-hint">Loading surfaces…</p>
                <p v-else class="field-hint">Define tooth surfaces to pick specific zones.</p>
              </div>
              <div class="form-field">
                <label for="restoration-quality">Quality</label>
                <select
                  id="restoration-quality"
                  v-model="restorationForm.quality"
                >
                  <option value="">Select</option>
                  <option
                    v-for="option in RESTORATION_QUALITY_OPTIONS"
                    :key="`rest-quality-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label for="restoration-detail">Detail</label>
                <select
                  id="restoration-detail"
                  v-model="restorationForm.detail"
                >
                  <option value="">Select</option>
                  <option
                    v-for="option in RESTORATION_DETAIL_OPTIONS"
                    :key="`rest-detail-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </template>

            <template v-else-if="showCrownFields">
              <div class="form-field">
                <label for="crown-material">Crown Material</label>
                <select id="crown-material" v-model="restorationForm.crown_material">
                  <option value="">Select</option>
                  <option
                    v-for="option in CROWN_MATERIAL_OPTIONS"
                    :key="`crown-material-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label for="crown-type">Crown Type</label>
                <select id="crown-type" v-model="restorationForm.crown_type">
                  <option value="">Select</option>
                  <option
                    v-for="option in CROWN_TYPE_OPTIONS"
                    :key="`crown-type-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field">
                <label for="crown-base">Crown Base</label>
                <select id="crown-base" v-model="restorationForm.crown_base">
                  <option value="">Select</option>
                  <option
                    v-for="option in CROWN_BASE_OPTIONS"
                    :key="`crown-base-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
              <div class="form-field" v-if="showImplantFields">
                <label for="crown-implant-type">Crown Implant Type</label>
                <select
                  id="crown-implant-type"
                  v-model="restorationForm.crown_implant_type"
                >
                  <option value="">Select</option>
                  <option
                    v-for="option in CROWN_IMPLANT_TYPE_OPTIONS"
                    :key="`crown-implant-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </template>

            <p v-if="restorationError" class="panel-error">{{ restorationError }}</p>
          </section>
          <footer class="panel-footer">
            <button type="button" class="secondary" @click="closeRestorationPanel">Cancel</button>
            <button
              type="button"
              class="primary"
              :disabled="!canSubmitRestoration || savingRestoration"
              @click="submitRestoration"
            >
              {{ savingRestoration ? "Saving…" : "Save Restoration" }}
            </button>
          </footer>
        </aside>
      </transition>

      <nav class="mouth">
        <ul>
          <li id="upper-jaw-button" class="jaw-button" @click="view = 'upper'" :class="{ 'active-jaw': view === 'upper' }">
            <svg width="28" height="28" viewBox="0 0 28 28" aria-labelledby="upper-jaw-image-title" role="img">
              <title id="upper-jaw-image-title">Upper Jaw</title>
              <use xlink:href="#upper-jaw"><symbol xmlns="http://www.w3.org/2000/svg" id="upper-jaw" width="28" height="28"><path d="M6.1 15.5C6.4 12.2 8 9.6 10 9.6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6s-3.6-.7-3.9-1.6c-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.1.7-1.5 1.2-3 1.2-1.6 0-3-.6-3-1.4v-.1c0-2.9 1.4-5.3 3.1-5.3 1.5.1 2.7 1.9 3 4.3z"/></symbol></use>
            </svg>
          </li>
          <li id="jaws-button" class="jaw-button" @click="view = 'all'" :class="{ 'active-jaw': view === 'all' }">
            <svg width="28" height="28" viewBox="0 0 28 28" aria-labelledby="jaws-image-title" role="img">
              <title id="jaws-image-title">Full mouth</title>
              <use xlink:href="#jaws"><symbol xmlns="http://www.w3.org/2000/svg" id="jaws" width="28" height="28"><path d="M20.9 17.4c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.1-.7 1.3-1.2 2.7-1.2 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.1-.1-2.2-1.7-2.4-3.8zm-14.8-6c.3-3.4 1.9-6 3.9-6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.3.7-1.6 1.2-3.1 1.2-1.6 0-3-.6-3-1.4v-.1C-.1 9.4 1.3 7 3 7c1.6.1 2.8 1.9 3.1 4.4z"/></symbol></use>
            </svg>
          </li>
          <li id="lower-jaw-button" class="jaw-button" @click="view = 'lower'" :class="{ 'active-jaw': view === 'lower' }">
            <svg width="28" height="28" viewBox="0 0 28 28" aria-labelledby="lower-jaw-image-title" role="img">
              <title id="lower-jaw-image-title">Lower Jaw</title>
              <use xlink:href="#lower-jaw"><symbol xmlns="http://www.w3.org/2000/svg" id="lower-jaw" width="28" height="28"><path d="M20.9 12.6c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.3-.6 1.5-1.1 2.9-1.1 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.2-.1-2.3-1.7-2.6-3.9z"/></symbol></use>
            </svg>
          </li>
        </ul>
      </nav>
    
    </div>

    <transition name="legend-fade">
      <div v-if="showLegend" class="legend-overlay" @click.self="showLegend = false">
        <div class="legend-panel">
          <header>
            <h3>Legend</h3>
            <button type="button" aria-label="Close legend" @click="showLegend = false">×</button>
          </header>
          <section>
            <h4>Layers</h4>
            <ul>
              <li><strong>Periodontal</strong>: blue fill (probing depth) and red line (gingival margin).</li>
              <li><strong>Pathology</strong>: coloured overlays for decay, fractures and discolorations.</li>
              <li><strong>Restorations</strong>: material-tinted surfaces for existing work.</li>
            </ul>
            <h4>Tips</h4>
            <ul>
              <li>Switch jaws with the right-hand toolbar to focus upper, lower or full views.</li>
              <li>Toggle layer visibility to compare periodontal values against other findings.</li>
            </ul>
          </section>
        </div>
      </div>
    </transition>

    <div class="layer-controls">
        <label v-for="layer in layerOptions" :key="layer.name">
          <input
            type="checkbox"
            :checked="layerIsActive(layer.name)"
            @change="toggleLayer(layer.name)"
          />
          <span>{{ layer.label }}</span>
        </label>
      </div>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, reactive, ref, watch } from "vue"
import ToothCanvas from "./ToothCanvas.vue"
import { surfaceMap } from "./utils/surfaces-map.js"

const props = defineProps({
  projection: { type: String, default: "buccal" },
  patientId: { type: String, default: "" },
})

const DEFAULT_PATIENT_ID = ""
const EMPTY_ARRAY = Object.freeze([])

const PATHOLOGY_TYPE_OPTIONS = ["Decay", "Fracture", "Tooth Wear", "Discoloration", "Apical", "Development Disorder"]
const DECAY_STAGE_OPTIONS = ["Dentin", "Enamel"]
const CAVITATION_OPTIONS = ["Cavitation", "No"]
const PULP_OPTIONS = ["Plup Involved", "Plup Not Involved"]
const DECAY_LEVEL_OPTIONS = ["C1", "C2", "C3", "C4"]
const FRACTURE_TYPE_OPTIONS = ["Crown Fracture", "Root Fracture"]
const FRACTURE_POSITION_OPTIONS = ["Vertical", "Horizontal"]
const WEAR_TYPE_OPTIONS = ["Abrasion", "Erosion"]
const DISCOLORATION_TYPE_OPTIONS = ["Gray", "Red", "Yellow"]

const RESTORATION_TYPE_OPTIONS = ["Filling", "Inlay", "Onlay", "Veneer", "Partial Crown", "Crown"]
const RESTORATION_MATERIAL_OPTIONS = ["Composite", "Ceramic", "Amalgam", "Gold", "Non-Precious Metal", "Temporary"]
const RESTORATION_QUALITY_OPTIONS = ["Sufficient", "Uncertain", "Insufficient"]
const RESTORATION_DETAIL_OPTIONS = ["Overhang", "Flush", "Shortfall"]
const CROWN_MATERIAL_OPTIONS = ["Composite", "Ceramic", "Gold", "Non-Precious Metal"]
const CROWN_TYPE_OPTIONS = ["Single Crown", "Abutment", "Pontic"]
const CROWN_BASE_OPTIONS = ["Natural", "Implant"]
const CROWN_IMPLANT_TYPE_OPTIONS = ["Bone Level", "Tissue Level"]
const CONDITION_STATE_OPTIONS = ["Normal", "Missing", "Implant", "Crown", "Bridge", "Prosthesis"]
const ERUPTION_STATUS_OPTIONS = ["Erupted", "Partially Erupted", "Impacted"]

const DEFAULT_SURFACE_OPTIONS = buildSurfaceOptionList()

function buildSurfaceOptionList() {
  const labels = new Set()
  Object.values(surfaceMap || {}).forEach((group) => {
    Object.keys(group || {}).forEach((key) => {
      const label = formatSurfaceLabel(key)
      if (label) labels.add(label)
    })
  })
  return Array.from(labels).sort((a, b) => a.localeCompare(b))
}

function formatSurfaceLabel(key) {
  if (!key) return ""
  return key
    .replace(/_/g, " ")
    .replace(/\s+/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())
    .trim()
}

const actionOptions = [
  {
    name: "overview",
    label: "Overview",
    view: "all",
    layers: ["periodontal", "pathology", "restorations"],
  },
  {
    name: "periodontal-probing",
    label: "Periodontal Probing",
    view: "all",
    layers: ["periodontal"],
  },
  { name: "pathology", label: "Pathology", view: "all", layers: ["pathology"] },
  { name: "restoration", label: "Restoration", view: "all", layers: ["restorations"] },
  {
    name: "condition",
    label: "Tooth Condition",
    view: "all",
    layers: ["pathology", "restorations"],
  },
]
const CUSTOM_ACTION = "custom"
const selectedAction = ref(actionOptions[0].name)
const view = ref(actionOptions[0].view || "all")
const showLegend = ref(false)
const loading = ref(false)
const loadError = ref(null)
const currentPatientId = ref(props.patientId || DEFAULT_PATIENT_ID)
const loadErrorMessage = computed(() => {
  if (!loadError.value) return ""
  return loadError.value.message || "Unable to load chart"
})

const surfaceOptions = ref(DEFAULT_SURFACE_OPTIONS.map((label) => ({ label, value: label })))
const surfaceOptionsLoaded = ref(false)
const surfacesLoading = ref(false)

const pathologyTooth = ref(null)
const pathologyPanelVisible = ref(false)
const pathologyEditId = ref(null)
const pathologyForm = reactive({
  pathology_type: "",
  decay_stage: "",
  cavitation: "",
  pulp: "",
  decay_level: "",
  fracture_type: "",
  fracture_position: "",
  wear_type: "",
  discoloration_type: "",
  decay_surfaces: [],
  wear_surfaces: [],
  notes: "",
})
const pathologyError = ref(null)
const savingPathology = ref(false)

const restorationTooth = ref(null)
const restorationPanelVisible = ref(false)
const restorationEditId = ref(null)
const restorationForm = reactive({
  restoration_type: "",
  surfaces: [],
  material: "",
  quality: "",
  detail: "",
  crown_material: "",
  crown_type: "",
  crown_base: "",
  crown_implant_type: "",
})
const restorationError = ref(null)
const savingRestoration = ref(false)

const conditionTooth = ref(null)
const conditionPanelVisible = ref(false)
const conditionForm = reactive({
  state: "",
  eruption_status: "",
  mobility: "",
  furcation: "",
  condition_notes: "",
})
const conditionError = ref(null)
const savingCondition = ref(false)
const savingPeriodontal = ref(false)
const periodontalSaveMessage = ref("")

const layerOptions = [
  { name: "periodontal", label: "Periodontal" },
  { name: "pathology", label: "Pathology" },
  { name: "restorations", label: "Restorations" },
]
const activeLayers = ref(["pathology", "restorations"])

const teethData = ref({
  chart: null,
  conditions: [],
  pathology: [],
  restorations: [],
  periodontal: {},
})

const upperLeft = ["18", "17", "16", "15", "14", "13", "12", "11"]
const upperRight = ["21", "22", "23", "24", "25", "26", "27", "28"]
const lowerLeft = ["48", "47", "46", "45", "44", "43", "42", "41"]
const lowerRight = ["31", "32", "33", "34", "35", "36", "37", "38"]

const upperArchOrder = [...upperLeft, ...upperRight]
const lowerArchOrder = [...lowerLeft, ...lowerRight]
const SITE_INFO = {
  db: { id: "db", group: "buccal", labels: { buccal: "Disto Buccal" } },
  b: { id: "b", group: "buccal", labels: { buccal: "Buccal" } },
  mb: { id: "mb", group: "buccal", labels: { buccal: "Mesio Buccal" } },
  dl: {
    id: "dl",
    group: "lingual",
    labels: { palatal: "Disto Palatal", lingual: "Disto Lingual" },
  },
  l: {
    id: "l",
    group: "lingual",
    labels: { palatal: "Palatal", lingual: "Lingual" },
  },
  ml: {
    id: "ml",
    group: "lingual",
    labels: { palatal: "Mesio Palatal", lingual: "Mesio Lingual" },
  },
}

const PANEL_SITE_LAYOUT = [
  { id: "db", variant: "buccal" },
  { id: "b", variant: "buccal" },
  { id: "mb", variant: "buccal" },
  { id: "ml", variant: "inner" },
  { id: "l", variant: "inner" },
  { id: "dl", variant: "inner" },
]

const PERIODONTAL_FLAGS = [
  { key: "bleeding", label: "Bleeding" },
  { key: "plaque", label: "Plaque" },
  { key: "suppuration", label: "Pus" },
]

const periodontalAutoAdvance = ref(true)
const periodontalCursor = ref(0)
const periodontalQueue = computed(() => buildPeriodontalQueue())
const currentQueueEntry = computed(() => periodontalQueue.value[periodontalCursor.value] || null)
const selectedTooth = computed(() => currentQueueEntry.value?.tooth || null)
const currentPeriodontalSite = computed(() => currentQueueEntry.value?.site || null)
const periodontalPanelVisible = ref(false)

function layerIsActive(name) {
  return activeLayers.value.includes(name)
}

const isPeriodontalMode = computed(() => selectedAction.value === "periodontal-probing")
const isPathologyMode = computed(() => selectedAction.value === "pathology")
const isRestorationMode = computed(() => selectedAction.value === "restoration")
const isConditionMode = computed(() => selectedAction.value === "condition")

const canSubmitPathology = computed(() => {
  if (!pathologyPanelVisible.value || !pathologyTooth.value) return false
  return Boolean(pathologyForm.pathology_type)
})

const canSubmitRestoration = computed(() => {
  if (!restorationPanelVisible.value || !restorationTooth.value) return false
  return Boolean(restorationForm.restoration_type)
})

const canSubmitCondition = computed(() => {
  if (!conditionPanelVisible.value || !conditionTooth.value) return false
  return Boolean(conditionForm.state)
})

const showRestorationDetailFields = computed(
  () => restorationForm.restoration_type && restorationForm.restoration_type !== "Crown"
)
const showCrownFields = computed(() => restorationForm.restoration_type === "Crown")
const showImplantFields = computed(
  () => showCrownFields.value && restorationForm.crown_base === "Implant"
)

const activePathologyEntries = computed(() =>
  pathologyTooth.value ? getToothPathology(pathologyTooth.value) : []
)
const activeRestorationEntries = computed(() =>
  restorationTooth.value ? getToothRestorations(restorationTooth.value) : []
)
const activeConditionEntry = computed(() =>
  conditionTooth.value ? getToothCondition(conditionTooth.value) : null
)

watch(
  () => selectedAction.value,
  (action, previous) => {
    if (action === "periodontal-probing") {
      periodontalCursor.value = 0
      periodontalPanelVisible.value = true
    } else if (previous === "periodontal-probing") {
      periodontalCursor.value = 0
      periodontalPanelVisible.value = false
    }
    if (action !== "pathology") {
      pathologyPanelVisible.value = false
      pathologyTooth.value = null
      pathologyError.value = null
      pathologyEditId.value = null
      resetPathologyForm()
    }
    if (action !== "restoration") {
      restorationPanelVisible.value = false
      restorationTooth.value = null
      restorationError.value = null
      restorationEditId.value = null
      resetRestorationForm()
    }
    if (action !== "condition") {
      conditionPanelVisible.value = false
      conditionTooth.value = null
      conditionError.value = null
      resetConditionForm()
    }
  },
  { immediate: true }
)

const periodontalPanelRef = ref(null)

watch(
  () => isPeriodontalMode.value,
  async (active) => {
    if (active && periodontalPanelVisible.value) {
      await nextTick()
      periodontalPanelRef.value?.focus()
    }
  }
)

watch(
  () => periodontalPanelVisible.value,
  async (visible) => {
    if (visible && isPeriodontalMode.value) {
      await nextTick()
      periodontalPanelRef.value?.focus()
    }
  }
)

watch(
  () => pathologyForm.pathology_type,
  (type) => {
    if (type !== "Decay") {
      pathologyForm.decay_stage = ""
      pathologyForm.cavitation = ""
      pathologyForm.pulp = ""
      pathologyForm.decay_level = ""
      pathologyForm.decay_surfaces = []
    }
    if (type !== "Fracture") {
      pathologyForm.fracture_type = ""
      pathologyForm.fracture_position = ""
    }
    if (type !== "Tooth Wear") {
      pathologyForm.wear_type = ""
      pathologyForm.wear_surfaces = []
    }
    if (type !== "Discoloration") {
      pathologyForm.discoloration_type = ""
    }
  }
)

watch(
  () => pathologyForm.cavitation,
  (value) => {
    if (value !== "Cavitation") {
      pathologyForm.pulp = ""
    }
  }
)

watch(
  () => restorationForm.restoration_type,
  (type) => {
    if (type === "Crown") {
      restorationForm.material = ""
      restorationForm.quality = ""
      restorationForm.detail = ""
      restorationForm.surfaces = []
    } else {
      restorationForm.crown_material = ""
      restorationForm.crown_type = ""
      restorationForm.crown_base = ""
      restorationForm.crown_implant_type = ""
    }
  }
)

watch(
  () => restorationForm.crown_base,
  (value) => {
    if (value !== "Implant") {
      restorationForm.crown_implant_type = ""
    }
  }
)

watch(
  () => isPathologyMode.value,
  (active) => {
    if (active) ensureSurfaceOptions()
  }
)

watch(
  () => isRestorationMode.value,
  (active) => {
    if (active) ensureSurfaceOptions()
  }
)

function handlePatientChange(patientId) {
  if (!patientId) {
    currentPatientId.value = ""
    clearChartData()
    loadError.value = new Error("Select a patient to view the chart.")
    return
  }
  const samePatient = patientId === currentPatientId.value
  if (samePatient && teethData.value.chart) {
    return
  }
  currentPatientId.value = patientId
  clearChartData()
  loadChart(patientId)
}

watch(
  () => props.patientId,
  (newPatientId, previousPatientId) => {
    if (newPatientId === previousPatientId) return
    handlePatientChange(newPatientId || "")
  }
)

function isSelectedTooth(num) {
  const value = String(num)
  if (isPeriodontalMode.value) {
    return String(selectedTooth.value || "") === value
  }
  if (isPathologyMode.value) {
    return pathologyPanelVisible.value && String(pathologyTooth.value || "") === value
  }
  if (isRestorationMode.value) {
    return restorationPanelVisible.value && String(restorationTooth.value || "") === value
  }
  if (isConditionMode.value) {
    return conditionPanelVisible.value && String(conditionTooth.value || "") === value
  }
  return false
}

function handleToothSelect(num) {
  const tooth = String(num)
  if (isPeriodontalMode.value) {
    const queue = periodontalQueue.value
    const index = queue.findIndex((entry) => entry.tooth === tooth)
    if (index !== -1) {
      periodontalCursor.value = index
      periodontalPanelVisible.value = true
      nextTick(() => periodontalPanelRef.value?.focus())
    }
    return
  }
  if (isPathologyMode.value) {
    startPathologyFlow(tooth)
    return
  }
  if (isRestorationMode.value) {
    startRestorationFlow(tooth)
    return
  }
  if (isConditionMode.value) {
    startConditionFlow(tooth)
  }
}

const periodontalToothSequence = computed(() => {
  const sequence = []
  periodontalQueue.value.forEach((entry) => {
    if (sequence[sequence.length - 1] !== entry.tooth) {
      sequence.push(entry.tooth)
    }
  })
  return sequence
})

function buildPeriodontalQueue() {
  const queue = []
  const addStage = (teeth, sites, variant) => {
    teeth.forEach((tooth) => {
      sites.forEach((siteId) => {
        const info = SITE_INFO[siteId]
        if (!info) return
        queue.push({
          tooth: String(tooth),
          site: { id: siteId, group: info.group, variant },
        })
      })
    })
  }

  addStage(upperArchOrder, ["db", "b", "mb"], "buccal")
  addStage([...upperArchOrder].reverse(), ["ml", "l", "dl"], "palatal")
  addStage(lowerArchOrder, ["db", "b", "mb"], "buccal")
  addStage([...lowerArchOrder].reverse(), ["ml", "l", "dl"], "lingual")

  return queue
}

const panelSites = computed(() => {
  const tooth = selectedTooth.value
  const innerVariant = isUpperToothNumber(tooth) ? "palatal" : "lingual"
  return PANEL_SITE_LAYOUT.map((entry) => {
    const variant = entry.variant === "inner" ? innerVariant : "buccal"
    const info = SITE_INFO[entry.id]
    return {
      id: entry.id,
      group: info?.group || "buccal",
      variant,
    }
  })
})

function isUpperToothNumber(toothNumber) {
  if (!toothNumber) return true
  const firstDigit = String(toothNumber)[0]
  return firstDigit === "1" || firstDigit === "2" || firstDigit === "5" || firstDigit === "6"
}

function siteDisplayLabel(site) {
  const info = SITE_INFO[site.id]
  if (!info) return site.id.toUpperCase()
  if (site.variant === "palatal") {
    return info.labels.palatal || info.labels.lingual || info.labels.buccal || site.id
  }
  if (site.variant === "lingual") {
    return info.labels.lingual || info.labels.palatal || info.labels.buccal || site.id
  }
  return info.labels.buccal || info.labels.lingual || site.id
}

function isActiveSite(site) {
  const entry = currentQueueEntry.value
  if (!entry) return false
  return entry.site.id === site.id && entry.site.variant === site.variant
}

function hidePeriodontalPanel() {
  periodontalPanelVisible.value = false
}

function handlePeriodontalKeyDown(event) {
  if (!isPeriodontalMode.value || !periodontalPanelVisible.value) return
  const activeField = document.activeElement?.dataset?.field
  if (activeField === "margin") return
  if (/^[0-9]$/.test(event.key)) {
    setCurrentSiteMeasurement("depth", Number(event.key))
    confirmPeriodontalEntry()
    event.preventDefault()
    event.stopPropagation()
  } else if (event.key === "Backspace") {
    setCurrentSiteMeasurement("depth", 0)
    event.preventDefault()
    event.stopPropagation()
  } else if (event.key === "ArrowRight") {
    goToNextSite()
    event.preventDefault()
    event.stopPropagation()
  } else if (event.key === "ArrowLeft") {
    goToPreviousSite()
    event.preventDefault()
    event.stopPropagation()
  }
}

async function ensureSurfaceOptions() {
  if (surfaceOptionsLoaded.value || surfacesLoading.value) return
  surfacesLoading.value = true
  try {
    const response = await frappe.call("frappe.client.get_list", {
      doctype: "Tooth Surface",
      fields: ["surface"],
      order_by: "surface asc",
      limit_page_length: 500,
    })
    const records = response?.message
    if (Array.isArray(records) && records.length) {
      const labels = new Set()
      records.forEach((record) => {
        const raw = (record.surface || record.name || "").toString().trim()
        if (raw) labels.add(raw)
      })
      if (labels.size) {
        surfaceOptions.value = Array.from(labels)
          .sort((a, b) => a.localeCompare(b))
          .map((label) => ({ label, value: label }))
      }
    }
  } catch (err) {
    console.warn("Failed to load tooth surfaces", err)
  } finally {
    surfacesLoading.value = false
    surfaceOptionsLoaded.value = true
  }
}

async function startPathologyFlow(tooth) {
  if (!tooth) return
  const target = String(tooth)
  resetPathologyForm()
  pathologyEditId.value = null
  pathologyTooth.value = target
  pathologyPanelVisible.value = true
  pathologyError.value = null
  await ensureSurfaceOptions()
}

function resetPathologyForm() {
  pathologyForm.pathology_type = ""
  pathologyForm.decay_stage = ""
  pathologyForm.cavitation = ""
  pathologyForm.pulp = ""
  pathologyForm.decay_level = ""
  pathologyForm.fracture_type = ""
  pathologyForm.fracture_position = ""
  pathologyForm.wear_type = ""
  pathologyForm.discoloration_type = ""
  pathologyForm.decay_surfaces = []
  pathologyForm.wear_surfaces = []
  pathologyForm.notes = ""
}

function populatePathologyForm(entry) {
  if (!entry) return
  resetPathologyForm()
  pathologyForm.pathology_type = entry.pathology_type || ""
  pathologyForm.decay_stage = entry.decay_stage || ""
  pathologyForm.cavitation = entry.cavitation || ""
  pathologyForm.pulp = entry.pulp || ""
  pathologyForm.decay_level = entry.decay_level || ""
  pathologyForm.fracture_type = entry.fracture_type || ""
  pathologyForm.fracture_position = entry.fracture_position || ""
  pathologyForm.wear_type = entry.wear_type || ""
  pathologyForm.discoloration_type = entry.discoloration_type || ""
  pathologyForm.decay_surfaces = surfaceListFromEntry(entry.decay_surfaces)
  pathologyForm.wear_surfaces = surfaceListFromEntry(entry.wear_surfaces)
  pathologyForm.notes = entry.notes || ""
}

async function editPathology(entry) {
  if (!entry) return
  await ensureSurfaceOptions()
  pathologyEditId.value = entry.name || null
  pathologyTooth.value = String(entry.tooth)
  pathologyPanelVisible.value = true
  pathologyError.value = null
  populatePathologyForm(entry)
}

function closePathologyPanel() {
  pathologyPanelVisible.value = false
  pathologyError.value = null
  pathologyTooth.value = null
  pathologyEditId.value = null
  resetPathologyForm()
}

async function startRestorationFlow(tooth) {
  if (!tooth) return
  const target = String(tooth)
  resetRestorationForm()
  restorationEditId.value = null
  restorationTooth.value = target
  restorationPanelVisible.value = true
  restorationError.value = null
  await ensureSurfaceOptions()
}

function resetRestorationForm() {
  restorationForm.restoration_type = ""
  restorationForm.surfaces = []
  restorationForm.material = ""
  restorationForm.quality = ""
  restorationForm.detail = ""
  restorationForm.crown_material = ""
  restorationForm.crown_type = ""
  restorationForm.crown_base = ""
  restorationForm.crown_implant_type = ""
}

function populateRestorationForm(entry) {
  if (!entry) return
  resetRestorationForm()
  restorationForm.restoration_type = entry.restoration_type || ""
  restorationForm.surfaces = surfaceListFromEntry(entry.surfaces)
  restorationForm.material = entry.material || ""
  restorationForm.quality = entry.quality || ""
  restorationForm.detail = entry.detail || ""
  restorationForm.crown_material = entry.crown_material || ""
  restorationForm.crown_type = entry.crown_type || ""
  restorationForm.crown_base = entry.crown_base || ""
  restorationForm.crown_implant_type = entry.crown_implant_type || ""
}

async function editRestoration(entry) {
  if (!entry) return
  await ensureSurfaceOptions()
  restorationEditId.value = entry.name || null
  restorationTooth.value = String(entry.tooth)
  restorationPanelVisible.value = true
  restorationError.value = null
  populateRestorationForm(entry)
}

function closeRestorationPanel() {
  restorationPanelVisible.value = false
  restorationError.value = null
  restorationTooth.value = null
  restorationEditId.value = null
  resetRestorationForm()
}

function startConditionFlow(tooth) {
  if (!tooth) return
  const target = String(tooth)
  const existing = getToothCondition(target)
  resetConditionForm(existing)
  conditionTooth.value = target
  conditionPanelVisible.value = true
  conditionError.value = null
}

function resetConditionForm(entry = null) {
  conditionForm.state = entry?.state || ""
  conditionForm.eruption_status = entry?.eruption_status || ""
  const mobilityValue = entry?.mobility
  const furcationValue = entry?.furcation
  conditionForm.mobility =
    mobilityValue === undefined || mobilityValue === null ? "" : String(mobilityValue)
  conditionForm.furcation =
    furcationValue === undefined || furcationValue === null ? "" : String(furcationValue)
  conditionForm.condition_notes = entry?.condition_notes || ""
}

function closeConditionPanel() {
  conditionPanelVisible.value = false
  conditionError.value = null
  conditionTooth.value = null
  resetConditionForm()
}

function convertSurfaceSelection(selection) {
  if (!Array.isArray(selection) || !selection.length) return []
  return selection
    .map((surface) => {
      const value = typeof surface === "string" ? surface.trim() : surface?.surface
      if (!value) return null
      return { surface: value }
    })
    .filter(Boolean)
}

function surfaceListFromEntry(list) {
  if (!Array.isArray(list)) return []
  return list
    .map((item) => {
      if (typeof item === "string") return item
      if (item && typeof item === "object") return item.surface || ""
      return ""
    })
    .filter(Boolean)
}

function buildPathologyPayload() {
  const payload = {
    pathology_type: pathologyForm.pathology_type,
  }
  if (pathologyForm.notes) payload.notes = pathologyForm.notes
  if (pathologyForm.pathology_type === "Decay") {
    payload.decay_stage = pathologyForm.decay_stage || null
    payload.cavitation = pathologyForm.cavitation || null
    payload.pulp = pathologyForm.cavitation === "Cavitation" ? pathologyForm.pulp || null : null
    payload.decay_level = pathologyForm.decay_level || null
    payload.decay_surfaces = convertSurfaceSelection(pathologyForm.decay_surfaces)
  } else if (pathologyForm.pathology_type === "Fracture") {
    payload.fracture_type = pathologyForm.fracture_type || null
    payload.fracture_position = pathologyForm.fracture_position || null
  } else if (pathologyForm.pathology_type === "Tooth Wear") {
    payload.wear_type = pathologyForm.wear_type || null
    payload.wear_surfaces = convertSurfaceSelection(pathologyForm.wear_surfaces)
  } else if (pathologyForm.pathology_type === "Discoloration") {
    payload.discoloration_type = pathologyForm.discoloration_type || null
  }
  return payload
}

function buildRestorationPayload() {
  const payload = {
    restoration_type: restorationForm.restoration_type,
  }
  if (restorationForm.restoration_type === "Crown") {
    payload.crown_material = restorationForm.crown_material || null
    payload.crown_type = restorationForm.crown_type || null
    payload.crown_base = restorationForm.crown_base || null
    payload.crown_implant_type =
      restorationForm.crown_base === "Implant" ? restorationForm.crown_implant_type || null : null
  } else {
    payload.material = restorationForm.material || null
    payload.quality = restorationForm.quality || null
    payload.detail = restorationForm.detail || null
    payload.surfaces = convertSurfaceSelection(restorationForm.surfaces)
  }
  return payload
}

function buildConditionPayload() {
  return {
    state: conditionForm.state,
    eruption_status: conditionForm.eruption_status || null,
    mobility: toNullableInt(conditionForm.mobility),
    furcation: toNullableInt(conditionForm.furcation),
    condition_notes: conditionForm.condition_notes || null,
  }
}

function appendLocalPathology(tooth, payload, id = null) {
  const list = [...(teethData.value.pathology || [])]
  const recordId = id || createLocalId("pathology")
  const entry = normalisePathologyEntry({
    tooth,
    name: recordId,
    ...payload,
  })
  const idx = list.findIndex((item) => item.name === recordId)
  if (idx !== -1) list[idx] = entry
  else list.push(entry)
  teethData.value.pathology = list
}

function appendLocalRestoration(tooth, payload, id = null) {
  const list = [...(teethData.value.restorations || [])]
  const recordId = id || createLocalId("restoration")
  const entry = normaliseRestorationEntry({
    tooth,
    name: recordId,
    ...payload,
  })
  const idx = list.findIndex((item) => item.name === recordId)
  if (idx !== -1) list[idx] = entry
  else list.push(entry)
  teethData.value.restorations = list
}

function removeLocalPathology(id) {
  if (!id) return
  const next = (teethData.value.pathology || []).filter((entry) => entry.name !== id)
  teethData.value.pathology = next
}

function removeLocalRestoration(id) {
  if (!id) return
  const next = (teethData.value.restorations || []).filter((entry) => entry.name !== id)
  teethData.value.restorations = next
}

function updateLocalCondition(tooth, payload) {
  const toothKey = String(tooth)
  const entries = Array.isArray(teethData.value.conditions) ? [...teethData.value.conditions] : []
  const idx = entries.findIndex((entry) => String(entry.tooth_number) === toothKey)
  const updated = {
    ...(idx !== -1 ? entries[idx] : {}),
    tooth_number: toothKey,
    ...payload,
  }
  if (idx !== -1) entries[idx] = updated
  else entries.push(updated)
  teethData.value.conditions = entries
}

function joinSurfaceLabels(list) {
  if (!Array.isArray(list) || !list.length) return ""
  return list
    .map((item) => {
      if (typeof item === "string") return item
      if (item && typeof item === "object") return item.surface || ""
      return ""
    })
    .filter(Boolean)
    .join(", ")
}

function summarisePathology(entry) {
  if (!entry) return ""
  const parts = [entry.pathology_type]
  if (entry.pathology_type === "Decay") {
    const surfaces = joinSurfaceLabels(entry.decay_surfaces)
    if (surfaces) parts.push(surfaces)
    if (entry.decay_stage) parts.push(entry.decay_stage)
    if (entry.cavitation) parts.push(entry.cavitation)
    if (entry.decay_level) parts.push(`Level ${entry.decay_level}`)
  } else if (entry.pathology_type === "Fracture") {
    if (entry.fracture_type) parts.push(entry.fracture_type)
    if (entry.fracture_position) parts.push(entry.fracture_position)
  } else if (entry.pathology_type === "Tooth Wear") {
    if (entry.wear_type) parts.push(entry.wear_type)
    const surfaces = joinSurfaceLabels(entry.wear_surfaces)
    if (surfaces) parts.push(surfaces)
  } else if (entry.pathology_type === "Discoloration") {
    if (entry.discoloration_type) parts.push(entry.discoloration_type)
  }
  return parts.filter(Boolean).join(" · ")
}

function summariseRestoration(entry) {
  if (!entry) return ""
  const parts = [entry.restoration_type || entry.type]
  if (entry.material) parts.push(entry.material)
  const surfaces = joinSurfaceLabels(entry.surfaces)
  if (surfaces) parts.push(surfaces)
  if (entry.quality) parts.push(entry.quality)
  if (entry.detail) parts.push(entry.detail)
  if (entry.crown_material) parts.push(entry.crown_material)
  if (entry.crown_type) parts.push(entry.crown_type)
  if (entry.crown_base) {
    parts.push(entry.crown_base)
    if (entry.crown_implant_type) parts.push(entry.crown_implant_type)
  }
  return parts.filter(Boolean).join(" · ")
}

function summariseCondition(entry) {
  if (!entry) return ""
  const parts = [entry.state]
  if (entry.eruption_status) parts.push(entry.eruption_status)
  if (entry.mobility !== undefined && entry.mobility !== null && entry.mobility !== "") {
    parts.push(`Mobility ${entry.mobility}`)
  }
  if (entry.furcation !== undefined && entry.furcation !== null && entry.furcation !== "") {
    parts.push(`Furcation ${entry.furcation}`)
  }
  if (entry.condition_notes) parts.push(entry.condition_notes)
  return parts.filter(Boolean).join(" · ")
}

async function deleteChartRecord(doctype, name) {
  if (!name) return false
  const response = await frappe.call("do_dental.api.delete_tooth_record", { doctype, name })
  return response !== null
}

async function deletePathology(entry) {
  if (!entry || !entry.name) return
  if (!window.confirm("Delete this pathology?")) return
  const isLocalRecord = typeof entry.name === "string" && entry.name.startsWith("pathology-")
  if (!teethData.value.chart?.name || isLocalRecord) {
    removeLocalPathology(entry.name)
    return
  }
  const success = await deleteChartRecord("Tooth Pathology", entry.name)
  if (success) {
    removeLocalPathology(entry.name)
  } else {
    pathologyError.value = "Could not delete pathology. Please try again."
  }
}

async function deleteRestoration(entry) {
  if (!entry || !entry.name) return
  if (!window.confirm("Delete this restoration?")) return
  const isLocalRecord = typeof entry.name === "string" && entry.name.startsWith("restoration-")
  if (!teethData.value.chart?.name || isLocalRecord) {
    removeLocalRestoration(entry.name)
    return
  }
  const success = await deleteChartRecord("Tooth Restoration", entry.name)
  if (success) {
    removeLocalRestoration(entry.name)
  } else {
    restorationError.value = "Could not delete restoration. Please try again."
  }
}

async function submitPathology() {
  if (!canSubmitPathology.value || savingPathology.value) return
  const tooth = pathologyTooth.value
  if (!tooth) return
  pathologyError.value = null
  const payload = buildPathologyPayload()
  const docId = pathologyEditId.value
  savingPathology.value = true
  try {
    if (!teethData.value.chart?.name) {
      appendLocalPathology(tooth, payload, docId)
    } else {
      const response = await frappe.call("do_dental.api.save_tooth_update", {
        chart_id: teethData.value.chart.name,
        tooth,
        pathology: { ...payload, name: docId || undefined },
      })
      if (response === null) {
        appendLocalPathology(tooth, payload, docId)
      } else if (currentPatientId.value) {
        await loadChart(currentPatientId.value)
      }
    }
    closePathologyPanel()
  } catch (err) {
    pathologyError.value = "Could not save pathology. Please try again."
    console.warn("Failed to save pathology", err)
  } finally {
    savingPathology.value = false
  }
}

async function submitRestoration() {
  if (!canSubmitRestoration.value || savingRestoration.value) return
  const tooth = restorationTooth.value
  if (!tooth) return
  restorationError.value = null
  const payload = buildRestorationPayload()
  const docId = restorationEditId.value
  savingRestoration.value = true
  try {
    if (!teethData.value.chart?.name) {
      appendLocalRestoration(tooth, payload, docId)
    } else {
      const response = await frappe.call("do_dental.api.save_tooth_update", {
        chart_id: teethData.value.chart.name,
        tooth,
        restoration: { ...payload, name: docId || undefined },
      })
      if (response === null) {
        appendLocalRestoration(tooth, payload, docId)
      } else if (currentPatientId.value) {
        await loadChart(currentPatientId.value)
      }
    }
    closeRestorationPanel()
  } catch (err) {
    restorationError.value = "Could not save restoration. Please try again."
    console.warn("Failed to save restoration", err)
  } finally {
    savingRestoration.value = false
  }
}

async function submitCondition() {
  if (!canSubmitCondition.value || savingCondition.value) return
  const tooth = conditionTooth.value
  if (!tooth) return
  conditionError.value = null
  const payload = buildConditionPayload()
  savingCondition.value = true
  try {
    if (!teethData.value.chart?.name) {
      updateLocalCondition(tooth, payload)
    } else {
      const response = await frappe.call("do_dental.api.save_tooth_update", {
        chart_id: teethData.value.chart.name,
        tooth,
        condition: payload,
      })
      if (response === null) {
        updateLocalCondition(tooth, payload)
      } else if (currentPatientId.value) {
        await loadChart(currentPatientId.value)
      }
    }
    closeConditionPanel()
  } catch (err) {
    conditionError.value = "Could not save condition. Please try again."
    console.warn("Failed to save condition", err)
  } finally {
    savingCondition.value = false
  }
}

function selectAction(name) {
  const action = actionOptions.find((option) => option.name === name)
  if (!action) return
  selectedAction.value = action.name
  const nextLayers = normaliseLayerList(action.layers)
  if (!layersMatch(nextLayers, activeLayers.value)) {
    activeLayers.value = nextLayers
  }
  if (action.view) {
    view.value = action.view
  }
  if (action.name === 'periodontal-probing') {
    periodontalPanelVisible.value = true
  }
}

function toggleLayer(name) {
  const next = new Set(activeLayers.value)
  if (next.has(name)) next.delete(name)
  else next.add(name)
  const nextLayers = normaliseLayerList(Array.from(next))
  if (!layersMatch(nextLayers, activeLayers.value)) {
    activeLayers.value = nextLayers
  }
  const matched = actionOptions.find((action) => layersMatch(action.layers, nextLayers))
  selectedAction.value = matched ? matched.name : CUSTOM_ACTION
}

function layersMatch(sourceLayers, candidateLayers) {
  const a = normaliseLayerList(sourceLayers)
  const b = normaliseLayerList(candidateLayers)
  if (a.length !== b.length) return false
  return a.every((name, index) => name === b[index])
}

function normaliseLayerList(layers) {
  const allowed = new Set(layerOptions.map((layer) => layer.name))
  const unique = Array.from(new Set(layers.filter((layer) => allowed.has(layer))))
  const order = layerOptions.map((layer) => layer.name)
  return order.filter((name) => unique.includes(name))
}

function normaliseSurfaceList(value) {
  if (!Array.isArray(value)) return []
  return value
    .map((item) => {
      if (typeof item === "string") return { surface: item }
      if (item && typeof item === "object" && item.surface) return { surface: item.surface }
      return null
    })
    .filter(Boolean)
}

function normalisePathologyEntry(entry) {
  const tooth = String(entry.tooth)
  return {
    ...entry,
    name: entry.name || entry.id || null,
    tooth,
    pathology_type: entry.pathology_type,
    decay_surfaces: normaliseSurfaceList(entry.decay_surfaces),
    wear_surfaces: normaliseSurfaceList(entry.wear_surfaces),
    fracture_surfaces: normaliseSurfaceList(entry.fracture_surfaces),
  }
}

function normaliseRestorationEntry(entry) {
  return {
    ...entry,
    name: entry.name || entry.id || null,
    tooth: String(entry.tooth),
    surfaces: normaliseSurfaceList(entry.surfaces),
  }
}

function toNumber(value, fallback = 0) {
  const parsed = parseFloat(value)
  return Number.isFinite(parsed) ? parsed : fallback
}

function toNullableInt(value) {
  if (value === "" || value === null || value === undefined) return null
  const parsed = parseInt(value, 10)
  return Number.isFinite(parsed) ? parsed : null
}

function createLocalId(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function createEmptySite() {
  return { depth: 0, margin: 0, bleeding: false, plaque: false, suppuration: false }
}

function mergeSite(site) {
  if (!site) return createEmptySite()
  return {
    depth: toNumber(site.depth),
    margin: toNumber(site.margin),
    bleeding: Boolean(site.bleeding),
    plaque: Boolean(site.plaque),
    suppuration: Boolean(site.suppuration ?? site.pus),
  }
}

function createDefaultPeriodontal() {
  return {
    buccal: { mb: createEmptySite(), b: createEmptySite(), db: createEmptySite() },
    lingual: { ml: createEmptySite(), l: createEmptySite(), dl: createEmptySite() },
  }
}

function deepFreeze(object) {
  Object.getOwnPropertyNames(object).forEach((prop) => {
    const value = object[prop]
    if (value && typeof value === "object") {
      deepFreeze(value)
    }
  })
  return Object.freeze(object)
}

const DEFAULT_PERIODONTAL_ENTRY = deepFreeze(createDefaultPeriodontal())

function ensurePeriodontalEntry(entry) {
  const base = createDefaultPeriodontal()
  if (!entry) return base
  for (const groupKey of ["buccal", "lingual"]) {
    const sourceGroup = entry[groupKey] || {}
    for (const siteKey of Object.keys(base[groupKey])) {
      base[groupKey][siteKey] = mergeSite(sourceGroup[siteKey])
    }
  }
  return base
}

const conditionsByTooth = computed(() => {
  const map = {}
  for (const entry of teethData.value.conditions || []) {
    map[String(entry.tooth_number)] = entry
  }
  return map
})

const pathologyByTooth = computed(() => {
  const map = {}
  for (const raw of teethData.value.pathology || []) {
    const entry = normalisePathologyEntry(raw)
    if (!map[entry.tooth]) map[entry.tooth] = []
    map[entry.tooth].push(entry)
  }
  return map
})

const restorationsByTooth = computed(() => {
  const map = {}
  for (const raw of teethData.value.restorations || []) {
    const entry = normaliseRestorationEntry(raw)
    if (!map[entry.tooth]) map[entry.tooth] = []
    map[entry.tooth].push(entry)
  }
  return map
})

const periodontalByTooth = computed(() => {
  const map = {}
  const source = teethData.value.periodontal || {}
  Object.keys(source).forEach((tooth) => {
    map[String(tooth)] = ensurePeriodontalEntry(source[tooth])
  })
  return map
})

const currentPeriodontalMeasurement = computed(() => {
  const entry = currentQueueEntry.value
  if (!entry) return createEmptySite()
  const record = periodontalByTooth.value[String(entry.tooth)]
  return record?.[entry.site.group]?.[entry.site.id] || createEmptySite()
})

const hasPreviousTooth = computed(() => {
  const tooth = selectedTooth.value
  if (!tooth) return false
  const sequence = periodontalToothSequence.value
  return sequence.indexOf(tooth) > 0
})

const hasNextTooth = computed(() => {
  const tooth = selectedTooth.value
  if (!tooth) return false
  const sequence = periodontalToothSequence.value
  const idx = sequence.indexOf(tooth)
  return idx >= 0 && idx < sequence.length - 1
})

function getToothCondition(num) {
  return conditionsByTooth.value[String(num)] || null
}

function getToothPathology(num) {
  return pathologyByTooth.value[String(num)] || EMPTY_ARRAY
}

function getToothRestorations(num) {
  return restorationsByTooth.value[String(num)] || EMPTY_ARRAY
}

function getPeriodontal(num) {
  return periodontalByTooth.value[String(num)] || DEFAULT_PERIODONTAL_ENTRY
}

function getNeighborNumber(num, delta) {
  const order = upperArchOrder.includes(String(num)) ? upperArchOrder : lowerArchOrder
  const index = order.indexOf(String(num))
  if (index === -1) return null
  return order[index + delta] || null
}

function getNeighborPeriodontal(num, delta) {
  const neighbor = getNeighborNumber(num, delta)
  if (!neighbor) return null
  return periodontalByTooth.value[String(neighbor)] || null
}

function selectPeriodontalSite(targetSite) {
  if (!selectedTooth.value || !targetSite) return
  const queue = periodontalQueue.value
  const index = queue.findIndex(
    (entry) =>
      entry.tooth === String(selectedTooth.value) &&
      entry.site.id === targetSite.id &&
      entry.site.variant === targetSite.variant
  )
  if (index !== -1) {
    periodontalCursor.value = index
    nextTick(() => periodontalPanelRef.value?.focus())
  }
}

function goToPreviousTooth() {
  const tooth = selectedTooth.value
  if (!tooth) return
  const sequence = periodontalToothSequence.value
  const idx = sequence.indexOf(tooth)
  if (idx > 0) {
    const prevTooth = sequence[idx - 1]
    const prevIndex = periodontalQueue.value.findIndex((entry) => entry.tooth === prevTooth)
    if (prevIndex !== -1) {
      periodontalCursor.value = prevIndex
      nextTick(() => periodontalPanelRef.value?.focus())
    }
  }
}

function goToNextTooth() {
  const tooth = selectedTooth.value
  if (!tooth) return
  const sequence = periodontalToothSequence.value
  const idx = sequence.indexOf(tooth)
  if (idx !== -1 && idx < sequence.length - 1) {
    const nextTooth = sequence[idx + 1]
    const nextIndex = periodontalQueue.value.findIndex((entry) => entry.tooth === nextTooth)
    if (nextIndex !== -1) {
      periodontalCursor.value = nextIndex
      nextTick(() => periodontalPanelRef.value?.focus())
    }
  }
}

function goToNextSite() {
  const queue = periodontalQueue.value
  if (!queue.length) return
  if (periodontalCursor.value < queue.length - 1) {
    periodontalCursor.value += 1
    nextTick(() => periodontalPanelRef.value?.focus())
  }
}

function goToPreviousSite() {
  if (periodontalCursor.value > 0) {
    periodontalCursor.value -= 1
    nextTick(() => periodontalPanelRef.value?.focus())
  }
}

function updatePeriodontalSiteValue(tooth, site, patch) {
  if (!tooth || !site) return
  const periodontal = { ...teethData.value.periodontal }
  const base = ensurePeriodontalEntry(periodontal[tooth])
  const groupKey = site.group || SITE_INFO[site.id]?.group || "buccal"
  const group = { ...base[groupKey] }
  const currentSite = { ...group[site.id] }
  const updated = { ...currentSite, ...patch }
  group[site.id] = updated
  periodontal[tooth] = {
    ...base,
    [groupKey]: group,
  }
  teethData.value.periodontal = periodontal
  periodontalSaveMessage.value = ""
}

function setCurrentSiteMeasurement(field, value) {
  if (!isPeriodontalMode.value) return
  const entry = currentQueueEntry.value
  if (!entry) return
  const site = entry.site
  const tooth = entry.tooth
  if (["bleeding", "plaque", "suppuration"].includes(field)) {
    updatePeriodontalSiteValue(tooth, site, { [field]: Boolean(value) })
  } else if (field === "depth") {
    const numericValue = Math.max(0, Math.min(9, toNumber(value)))
    updatePeriodontalSiteValue(tooth, site, { [field]: numericValue })
  } else if (field === "margin") {
    const raw = typeof value === "string" ? value.trim() : String(value ?? "")
    if (raw === "" || raw === "-" || raw === "+") return
    let numericValue = Number(raw)
    if (!Number.isFinite(numericValue)) return
    numericValue = Math.max(-12, Math.min(12, numericValue))
    updatePeriodontalSiteValue(tooth, site, { [field]: numericValue })
  }
}

function toggleCurrentSiteFlag(flagKey) {
  const nextValue = !Boolean(currentPeriodontalMeasurement.value[flagKey])
  setCurrentSiteMeasurement(flagKey, nextValue)
}

function confirmPeriodontalEntry() {
  if (periodontalAutoAdvance.value) {
    goToNextSite()
  }
}

function buildPeriodontalTestPayload() {
  const payload = {}
  const source = teethData.value.periodontal || {}
  Object.keys(source).forEach((tooth) => {
    payload[tooth] = ensurePeriodontalEntry(source[tooth])
  })
  return payload
}

async function submitPeriodontalTest() {
  if (savingPeriodontal.value) return
  const chartId = teethData.value.chart?.name
  const patientId = currentPatientId.value || teethData.value.chart?.patient
  if (!chartId || !patientId) {
    periodontalSaveMessage.value = "Select a patient to save periodontal data."
    return
  }
  const payload = buildPeriodontalTestPayload()
  if (!Object.keys(payload).length) {
    periodontalSaveMessage.value = "No periodontal measurements to save."
    return
  }
  savingPeriodontal.value = true
  periodontalSaveMessage.value = ""
  try {
    const response = await frappe.call("do_dental.api.save_periodontal_test", {
      chart_id: chartId,
      patient_id: patientId,
      periodontal: payload,
    })
    if (!response?.message) {
      throw new Error("Unable to save periodontal test")
    }
    periodontalSaveMessage.value = "Periodontal test saved."
    if (currentPatientId.value) {
      await loadChart(currentPatientId.value)
    }
  } catch (err) {
    periodontalSaveMessage.value = "Could not save periodontal test."
    console.warn("Failed to save periodontal test", err)
  } finally {
    savingPeriodontal.value = false
  }
}

function periodontalSiteSummary(tooth, site) {
  if (!tooth) return "—"
  const record = periodontalByTooth.value[String(tooth)]
  if (!record) return "—"
  const info = SITE_INFO[site.id]
  const groupKey = site.group || info?.group
  if (!groupKey) return "—"
  const siteData = record[groupKey]?.[site.id]
  if (!siteData) return "—"
  const depth = toNumber(siteData.depth, 0)
  const margin = toNumber(siteData.margin, 0)
  const depthText = Number(depth).toString()
  const marginText = margin ? ` / ${margin}` : ""
  return `${depthText}${marginText}`
}

function assignTeethData(payload) {
  teethData.value = {
    chart: payload?.chart || null,
    conditions: payload?.conditions || [],
    pathology: payload?.pathology || [],
    restorations: payload?.restorations || [],
    periodontal: payload?.periodontal || {},
  }
}

function clearChartData() {
  assignTeethData({
    chart: null,
    conditions: [],
    pathology: [],
    restorations: [],
    periodontal: {},
  })
}

async function loadChart(patientId) {
  const targetId = patientId || currentPatientId.value || DEFAULT_PATIENT_ID
  if (!targetId) {
    loadError.value = new Error("Select a patient to view the chart.")
    clearChartData()
    return
  }
  currentPatientId.value = targetId
  loading.value = true
  loadError.value = null
  try {
    const response = await frappe.call("do_dental.api.get_patient_dental_chart", { patient_id: targetId })
    console.log(response?.message)
    if (response?.message) {
      assignTeethData(response.message)
      return
    }
    throw new Error("No chart data returned")
  } catch (err) {
    loadError.value = err instanceof Error ? err : new Error("Unable to load chart data")
    clearChartData()
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  ensureSurfaceOptions()
  handlePatientChange(currentPatientId.value || props.patientId || "")
})
</script>

<style scoped>
.dental-chart-container {
  position: relative;
  padding-right: 84px;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.layer-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.layer-controls label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #4d5565;
}

.layer-controls input {
  accent-color: #33a5de;
}

.chart-meta {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chart-status {
  font-size: 12px;
  color: #7a8599;
}

.chart-status.warning {
  color: #cc7a00;
}

.legend-button {
  border: 1px solid #4d5565;
  background: #fff;
  color: #4d5565;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 12px;
  cursor: pointer;
}

.legend-button:hover {
  background: #f2f4f7;
}

.chart-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.teeth-row {
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
}

.teeth-row li {
  list-style: none;
  margin: 0.2px;
  padding: 0;
}

nav.mouth {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  right: 24px;
  overflow: hidden;
  border: 1px solid #4d5565;
  border-radius: 4px;
}

nav.mouth ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

nav.mouth li {
  width: 48px;
  height: 48px;
  border-bottom: 1px solid #4d5565;
  color: #7a8599;
  transition: 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
  transition-property: color, background-color, border;
  cursor: pointer;
}

nav.mouth li:hover {
  background-color: #ececec;
}

nav.mouth svg {
  fill: currentcolor;
  max-width: 100%;
  height: auto;
  display: block;
  width: auto;
  padding: 10px;
}

nav.mouth .active-jaw {
  color: #33a5de;
}

.legend-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
}

.legend-panel {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  width: min(420px, 90%);
  max-height: 80vh;
  overflow: auto;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.25);
}

.legend-panel header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.legend-panel header h3 {
  margin: 0;
  font-size: 18px;
  color: #202633;
}

.legend-panel header button {
  border: none;
  background: none;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  color: #4d5565;
}

.legend-panel section h4 {
  margin: 16px 0 8px;
  font-size: 14px;
  color: #4d5565;
}

.legend-panel ul {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #4d5565;
}

.legend-fade-enter-active,
.legend-fade-leave-active {
  transition: opacity 0.2s ease;
}

.legend-fade-enter-from,
.legend-fade-leave-to {
  opacity: 0;
}

.action-panel {
  position: sticky;
  top: 72px;
  flex: 0 0 320px;
  width: 320px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.16);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 10;
}

.action-panel .panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action-panel .panel-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
}

.action-panel .panel-subtitle {
  margin: 0;
  font-size: 13px;
  color: #4d5565;
}

.action-panel .panel-close {
  border: none;
  background: transparent;
  color: #475467;
  font-size: 20px;
  line-height: 1;
  padding: 0 8px;
  cursor: pointer;
}

.action-panel .panel-close:hover {
  color: #0f62fe;
}

.action-panel .panel-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: calc(100vh - 220px);
  overflow-y: auto;
  padding-right: 4px;
}

.action-panel .panel-body::-webkit-scrollbar {
  width: 6px;
}

.action-panel .panel-body::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.6);
  border-radius: 3px;
}

.action-panel .existing-list h4 {
  margin: 0 0 6px;
  font-size: 13px;
  font-weight: 600;
  color: #475467;
}

.action-panel .existing-list ul {
  margin: 0;
  padding-left: 18px;
  font-size: 12px;
  color: #4d5565;
}

.action-panel .existing-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.action-panel .existing-item .item-actions {
  display: flex;
  gap: 6px;
}

.action-panel .existing-item .text-button {
  background: none;
  border: none;
  color: #0f62fe;
  font-size: 12px;
  cursor: pointer;
  padding: 0;
}

.action-panel .existing-item .text-button.danger {
  color: #b42318;
}

.action-panel .form-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.action-panel .form-field label {
  font-size: 13px;
  font-weight: 500;
  color: #1f2937;
}

.action-panel select,
.action-panel textarea,
.action-panel input:not([type="checkbox"]) {
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  color: #111827;
  background: #fff;
}

.action-panel textarea {
  resize: vertical;
  min-height: 80px;
}

.action-panel .surface-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 6px;
}

.action-panel .surface-grid label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #475467;
  padding: 6px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #f9fafb;
  cursor: pointer;
}

.action-panel .surface-grid input[type="checkbox"] {
  margin: 0;
  width: 16px;
  height: 16px;
  accent-color: #0f62fe;
  flex-shrink: 0;
}

.action-panel .surface-grid label.selected {
  border-color: #0f62fe;
  background: #e6f0ff;
  color: #0f62fe;
}

.action-panel .panel-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.action-panel button.primary {
  background: #0f62fe;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
}

.action-panel button.primary:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.action-panel button.secondary {
  background: transparent;
  color: #475467;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}

.action-panel .panel-error {
  color: #b42318;
  font-size: 12px;
  margin: 0;
}

.action-panel .field-hint {
  margin: 0;
  font-size: 12px;
  color: #6b7280;
}

.action-panel .form-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
