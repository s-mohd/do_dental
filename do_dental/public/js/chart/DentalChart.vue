<template>
  <div class="dental-chart-container" :class="{ 'periodontal-mode': isPeriodontalMode }">
    <div class="chart-layout" :class="{ 'chart-expanded': chartExpanded }">
      <section class="chart-area" :class="{ expanded: chartExpanded }">
        <div class="chart-header">
          <div class="chart-title">
            <h2>Dental Chart</h2>
            <!-- <p class="chart-hint">Select a tooth to open the work area.</p> -->
          </div>
          <div class="chart-meta">
            <span v-if="loading" class="chart-status">Loading…</span>
            <span v-else-if="loadError" class="chart-status warning">{{ loadErrorMessage }}</span>
            <button type="button" class="legend-button" @click="showLegend = true">Legend</button>
            <button type="button" class="expand-button" @click="toggleChartExpansion">
              {{ chartExpanded ? "Collapse" : "Expand" }}
            </button>
          </div>
        </div>

        <div class="chart-main">
          <div class="chart-body">
            <!-- All Jaws -->
            <div v-if="view === 'all'" class="all-jaws">
            <ul class="teeth-row">
              <li v-for="num in upperLeft" :key="num">
                <ToothCanvas
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
              v-on="toothEventHandlers"
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
        </div>


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
              <use xlink:href="#jaws"><symbol xmlns="http://www.w3.org/2000/svg" id="jaws" width="28" height="28"><path d="M20.9 17.4c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.2-3.5-5.2c-.3 2.9-1.7 5.2-3.5 5.2s-3.2-2.3-3.5-5.3c-.2 2.2-1.3 3.8-2.7 3.8-1.5 0-2.7-2.1-2.7-4.7.1-.7 1.3-1.2 2.7-1.2 1.3 0 2.4.5 2.6 1.1.3-.8 1.8-1.4 3.5-1.4s3.2.6 3.4 1.4c.3-.8 1.8-1.4 3.5-1.4s3.1.6 3.4 1.4c.2-.6 1.4-1 2.7-1 1.4 0 2.6.5 2.7 1.2v.1c0 2.6-1.2 4.6-2.7 4.6-1.1-.1-2.2-1.7-2.4-3.8zm-14.8-6c.3-3.4 1.9-6 3.9-6s3.7 2.6 3.9 5.9c.3-3.3 1.9-5.9 3.9-5.9s3.7 2.6 4 6c.3-2.5 1.5-4.4 3-4.4 1.7 0 3.1 2.4 3.1 5.4-.1.8-1.5 1.4-3.1 1.4-1.5 0-2.8-.5-3-1.2-.3.9-2 1.6-4 1.6s-3.6-.7-3.9-1.6c-.3.9-2 1.6-4 1.6-1.9 0-3.6-.7-3.9-1.6-.3.7-1.6 1.2-3.1 1.2-1.6 0-3-.6-3-1.4v-.1C-.1 9.4 1.3 7 3 7c1.6.1 2.8 1.9 3.1 4.4z"/></symbol></use>
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
    </section>

    <section class="workflow-stack" v-show="!chartExpanded">
      <div class="actions-card">
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
        <!-- <p class="actions-hint">Pick an action and tooth to open the work area.</p> -->
        <div v-if="isProcedureMode" class="selection-hint">
          <span>{{ selectedTeethSummary }}</span>
          <button v-if="selectedTeeth.length" type="button" class="text-link" @click="clearSelectedTeeth">
            Clear
          </button>
        </div>
      </div>

      <div v-if="isOverviewMode && overviewTooth" class="overview-card">
        <header class="overview-header">
          <div>
            <h4>Tooth Overview</h4>
            <p>Tooth {{ overviewTooth }}</p>
          </div>
          <button class="text-link" @click="resetOverviewPanel" type="button">Reset</button>
        </header>
        <div class="overview-grid">
          <section>
            <h5>Condition</h5>
            <p v-if="overviewCondition">
              {{ summariseCondition(overviewCondition) }}
            </p>
            <p v-else class="field-hint">No condition recorded.</p>
          </section>
          <section>
            <h5>Restorations</h5>
            <ul v-if="overviewRestorations.length">
              <li v-for="(entry, idx) in overviewRestorations" :key="`or-${idx}`">
                {{ summariseRestoration(entry) }}
              </li>
            </ul>
            <p v-else class="field-hint">No restorations recorded.</p>
          </section>
          <section>
            <h5>Pathology</h5>
            <ul v-if="overviewPathology.length">
              <li v-for="(entry, idx) in overviewPathology" :key="`op-${idx}`">
                {{ summarisePathology(entry) }}
              </li>
            </ul>
            <p v-else class="field-hint">No pathology recorded.</p>
          </section>
          <section>
            <h5>Periodontal</h5>
            <div v-if="overviewPeriodontal" class="periodontal-summary">
              <div>
                <span class="label">Buccal</span>
                <strong>{{ formatPeriodontalSummary(overviewPeriodontal.buccal) }}</strong>
              </div>
              <div>
                <span class="label">Lingual</span>
                <strong>{{ formatPeriodontalSummary(overviewPeriodontal.lingual) }}</strong>
              </div>
            </div>
            <p v-else class="field-hint">No periodontal data.</p>
          </section>
        </div>
      </div>

      <!-- <div class="layer-card">
        <header>
          <h3>Layers</h3>
          <p>Toggle visual overlays</p>
        </header>
      </div> -->

      <div v-if="!isOverviewMode" class="action-work-area">
      <transition name="panel-slide">
        <aside
          v-if="isPeriodontalMode && selectedTooth && periodontalPanelVisible"
          class="periodontal-panel action-panel"
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

      <transition name="panel-slide">
        <aside
          v-if="isProcedureMode && procedurePanelVisible"
          class="action-panel procedure-panel"
        >
          <header class="panel-header">
            <div>
              <h3 class="panel-title">Clinical Procedure</h3>
              <p class="panel-subtitle" v-if="selectedProcedureTemplate">
                {{ selectedProcedureTemplate.template }}
              </p>
              <p class="panel-subtitle" v-else>Select a template to begin</p>
            </div>
            <button
              type="button"
              class="panel-close"
              @click="closeProcedurePanel"
              aria-label="Close procedure panel"
            >
              ×
            </button>
          </header>
          <section class="panel-body">
            <div class="selection-overview">
              <strong>{{ selectedTeeth.length }}</strong>
              <span>teeth selected</span>
              <button
                type="button"
                class="text-link"
                @click="clearSelectedTeeth"
              >
                Clear
              </button>
            </div>
            <div class="form-field">
              <label for="procedure-search">Search Template</label>
              <input
                id="procedure-search"
                type="search"
                v-model="procedureTemplateSearch"
                placeholder="Search template name"
                @focus="ensureProcedureTemplates()"
              />
            </div>
            <div class="template-grid">
              <button
                v-for="template in filteredProcedureTemplates"
                :key="template.name"
                type="button"
                :class="{ selected: selectedProcedureTemplate && selectedProcedureTemplate.name === template.name }"
                @click="selectProcedureTemplate(template)"
              >
                <strong>{{ template.template }}</strong>
                <small>{{ template.description || template.item_group }}</small>
                <em v-if="template.standard_price !== null && template.standard_price !== undefined">
                  Standard Price: {{ formatCurrency(template.standard_price, template.standard_price_currency) }}
                </em>
                <em v-else-if="template.rate">
                  Rate: {{ formatCurrency(template.rate) }}
                </em>
              </button>
              <p v-if="!procedureTemplatesLoading && !filteredProcedureTemplates.length" class="field-hint">
                No templates found.
              </p>
              <p v-if="procedureTemplatesLoading" class="field-hint">Loading templates…</p>
            </div>

            <div v-if="selectedProcedureTemplate" class="form-section">
              <div class="form-field">
                <label for="procedure-type">Restoration Type</label>
                <select id="procedure-type" v-model="procedureForm.restoration_type">
                  <option value="">Select</option>
                  <option
                    v-for="option in RESTORATION_TYPE_OPTIONS"
                    :key="`procedure-rt-${option}`"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>

              <div class="form-field">
                <label for="procedure-material">Material</label>
                <select id="procedure-material" v-model="procedureForm.material">
                  <option value="">Select</option>
                  <option
                    v-for="option in RESTORATION_MATERIAL_OPTIONS"
                    :key="`procedure-material-${option}`"
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
                    :key="`procedure-surface-${surface.value}`"
                    :class="{ selected: procedureForm.surfaces.includes(surface.value) }"
                  >
                    <input
                      type="checkbox"
                      :value="surface.value"
                      v-model="procedureForm.surfaces"
                    />
                    <span>{{ surface.label }}</span>
                  </label>
                </div>
                <p v-else class="field-hint">Define tooth surfaces to pick specific zones.</p>
              </div>

              <div class="form-field">
                <label for="procedure-provider">Provider</label>
                <div id="procedure-provider" ref="procedureProviderRef"></div>
              </div>

              <div class="form-field">
                <label for="procedure-notes">Notes</label>
                <textarea
                  id="procedure-notes"
                  rows="3"
                  v-model="procedureForm.notes"
                  placeholder="Describe the procedure details"
                ></textarea>
              </div>
            </div>

            <p v-if="procedureError" class="panel-error">{{ procedureError }}</p>
          </section>
          <footer class="panel-footer">
            <button type="button" class="secondary" @click="closeProcedurePanel">Cancel</button>
            <button
              type="button"
              class="primary"
              :disabled="!canSubmitProcedure || savingProcedure"
              @click="submitProcedure"
            >
              {{ savingProcedure ? "Saving…" : "Finish Procedure" }}
            </button>
          </footer>
        </aside>
      </transition>

        <p v-if="!hasActivePanel" class="panel-placeholder">
          Select a tooth to review or update the current action.
        </p>
      </div>

    </section>
  </div>

  <section class="history-panel">
    <header>
      <div>
        <h3>Visit History</h3>
      </div>
      <span class="history-count">{{ visitHistory.length }}</span>
    </header>
    <div v-if="!visitHistory.length" class="history-empty">
      Visits will appear here after encounters or procedures are recorded.
    </div>
    <div class="history-table-wrapper">
      <table class="history-table">
        <thead>
          <tr>
            <th>Visit</th>
            <th>Date</th>
            <th>Provider</th>
            <th>Status</th>
            <th>Billing</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="group in groupedVisitHistory" :key="group.key">
            <tr :class="groupRowClass(group)" @click="toggleAppointmentGroup(group.key)">
              <td class="group-title-cell">
                <span class="chevron" :class="{ open: !isAppointmentCollapsed(group.key) }">▸</span>
                <div class="group-header">
                  <span class="group-label">
                    {{ group.appointment ? `Appointment ${group.appointment}` : "No Appointment" }}
                  </span>
                </div>
              </td>
              <td>{{ group.appointment ? formatVisitTimestamp(group.summary.date, group.summary.time) : '' }}</td>
              <td>{{ group.appointment ? group.summary.provider || "—" : '' }}</td>
              <td>{{ group.appointment ? group.summary.status || "—" : '' }}</td>
              <td>
                <div class="billing-chip compact">
                  <span class="amount">
                    {{ group.appointment ? formatCurrency(group.summary.billing_amount, group.summary.currency) || "—" : '' }}
                  </span>
                  <small v-if="group.summary.paid_amount">
                    Paid {{ group.appointment ? formatCurrency(group.summary.paid_amount, group.summary.currency) : '' }}
                  </small>
                  <small v-else-if="group.summary.outstanding_amount">
                    Due {{ group.appointment ? formatCurrency(group.summary.outstanding_amount, group.summary.currency) : '' }}
                  </small>
                </div>
              </td>
              <td></td>
            </tr>
            <template v-if="!isAppointmentCollapsed(group.key)">
              <template v-for="visit in group.visits" :key="visit.id">
                <tr
                  :class="visitRowClass(visit)"
                  @click="toggleVisitActions(visit)"
                  @contextmenu.prevent="toggleVisitActions(visit)"
                >
                  <td>
                    <div class="visit-title">
                      <strong>{{ visit.type_label }}</strong>
                      <span class="history-purpose">{{ visit.purpose || visit.title }}</span>
                    </div>
                  </td>
                  <td>{{ formatVisitTimestamp(visit.date, visit.time) }}</td>
                  <td>{{ visit.practitioner_name || visit.practitioner || "—" }}</td>
                  <td>{{ visit.status || "—" }}</td>
                  <td></td>
                  <td class="actions-cell">
                    <div
                      v-if="activeVisitActionId === visit.id"
                      class="visit-menu"
                      @mouseleave="activeVisitActionId = null"
                      @click.stop
                    >
                      <button type="button" @click="openVisitDocument(visit)">Open Record</button>
                      <button
                        type="button"
                        :disabled="completingVisitId === visit.id || visit.status === 'Completed'"
                        @click="markVisitComplete(visit)"
                      >
                        {{ completingVisitId === visit.id ? "Marking…" : "Set Complete" }}
                      </button>
                      <button type="button" @click="toggleVisitDetails(visit.id)">
                        {{ isVisitExpanded(visit.id) ? "Hide Chart Changes" : "View Chart Changes" }}
                      </button>
                      <button
                        type="button"
                        class="danger"
                        :disabled="deletingVisitId === visit.id"
                        @click="deleteVisit(visit)"
                      >
                        {{ deletingVisitId === visit.id ? "Deleting…" : "Delete Visit" }}
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="isVisitExpanded(visit.id)" class="history-details-row">
                  <td colspan="6">
                    <div class="history-details">
                      <template v-if="visit.changes?.restorations?.length">
                        <h5>Restorations</h5>
                        <ul>
                          <li v-for="(entry, idx) in visit.changes.restorations" :key="`rest-${visit.id}-${idx}`">
                            {{ summariseRestoration(entry) }}
                          </li>
                        </ul>
                      </template>
                      <template v-if="visit.changes?.pathology?.length">
                        <h5>Pathology</h5>
                        <ul>
                          <li v-for="(entry, idx) in visit.changes.pathology" :key="`pathology-${visit.id}-${idx}`">
                            {{ summarisePathology(entry) }}
                          </li>
                        </ul>
                      </template>
                      <div v-if="visit.invoices?.length" class="invoice-chips">
                        <button
                          v-for="invoice in visit.invoices"
                          :key="`${visit.id}-${invoice.name}`"
                          type="button"
                          class="chip"
                          @click="openInvoice(invoice)"
                        >
                          {{ invoice.name }} · {{ formatCurrency(invoice.amount, visit.currency) }}
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </template>
          </template>
        </tbody>
      </table>
    </div>
  </section>

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
</div>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue"
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
const PULP_OPTIONS = ["Pulp Involved", "Pulp Not Involved"]
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
const STANDARD_PRICE_LIST = "Standard Selling"

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
    name: "procedure",
    label: "Procedure",
    view: "all",
    layers: ["restorations", "pathology"],
  },
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
const chartExpanded = ref(false)
const loading = ref(false)
const loadError = ref(null)
const currentPatientId = ref(props.patientId || DEFAULT_PATIENT_ID)
const loadErrorMessage = computed(() => {
  if (!loadError.value) return ""
  return loadError.value.message || "Unable to load chart"
})

const selectedTeeth = ref([])
const dragSelectionState = reactive({
  active: false,
  mode: "add",
})
const procedurePanelVisible = ref(false)
const procedureTemplates = ref([])
const procedureTemplatesLoaded = ref(false)
const procedureTemplatesLoading = ref(false)
const procedureTemplateSearch = ref("")
const selectedProcedureTemplate = ref(null)
const procedureProviderRef = ref(null)
const providerLinkControl = ref(null)
const procedureForm = reactive({
  restoration_type: "",
  type: "",
  material: "",
  quality: "",
  detail: "",
  crown_material: "",
  crown_type: "",
  crown_base: "",
  crown_implant_type: "",
  surfaces: [],
  provider: "",
  notes: "",
})
const procedureError = ref(null)
const savingProcedure = ref(false)
const visitHistory = ref([])
const expandedVisits = ref([])
const deletingVisitId = ref(null)
const activeVisitActionId = ref(null)
const completingVisitId = ref(null)
const activePatientContext = ref(null)
const activeAppointment = ref(null)
const overviewTooth = ref(null)

const surfaceOptions = ref(DEFAULT_SURFACE_OPTIONS.map((label) => ({ label, value: label })))
const surfaceOptionsLoaded = ref(false)
const surfacesLoading = ref(false)
const currentAppointmentId = computed(
  () => activeAppointment.value?.name || activePatientContext.value?.appointment || null
)
const collapsedAppointments = ref([])
const groupedVisitHistory = computed(() => {
  const groups = []
  const index = new Map()
  ;(visitHistory.value || []).forEach((visit) => {
    const key = visit.appointment || "__no_appointment__"
    if (!index.has(key)) {
      index.set(key, {
        key,
        appointment: visit.appointment || null,
        visits: [],
        summary: {
          date: visit.appointment_date || null,
          time: visit.appointment_time || null,
          provider: visit.appointment_practitioner_name || visit.appointment_practitioner || visit.practitioner_name || visit.practitioner || "",
          status: visit.appointment_custom_status || visit.appointment_status || "",
          billing_amount: null,
          paid_amount: null,
          outstanding_amount: null,
          currency: visit.currency || null,
          ref_sales_invoice: visit.appointment_ref_sales_invoice || null,
        },
        statuses: new Set(),
      })
      groups.push(index.get(key))
    }
    const group = index.get(key)
    group.visits.push(visit)
    const summary = group.summary
    if (!summary.date && (visit.appointment_date || visit.date)) summary.date = visit.appointment_date || visit.date
    if (!summary.time && (visit.appointment_time || visit.time)) summary.time = visit.appointment_time || visit.time
    if (
      !summary.provider &&
      (visit.appointment_practitioner_name ||
        visit.appointment_practitioner ||
        visit.practitioner_name ||
        visit.practitioner)
    ) {
      summary.provider =
        visit.appointment_practitioner_name ||
        visit.appointment_practitioner ||
        visit.practitioner_name ||
        visit.practitioner
    }
    if (summary.billing_amount === null && visit.billing_amount !== undefined) {
      summary.billing_amount = toNumber(visit.billing_amount, 0)
    }
    if (summary.paid_amount === null && visit.paid_amount !== undefined) {
      summary.paid_amount = toNumber(visit.paid_amount, 0)
    }
    if (summary.outstanding_amount === null && visit.outstanding_amount !== undefined) {
      summary.outstanding_amount = toNumber(visit.outstanding_amount, 0)
    }
    if (!summary.currency && visit.currency) summary.currency = visit.currency
    if (!summary.status) {
      summary.status =
        visit.appointment_custom_status ||
        visit.appointment_status ||
        visit.status ||
        ""
    }
    if (visit.status) group.statuses.add(visit.status)
  })

  groups.forEach((group) => {
    if (!group.summary.status) {
      group.summary.status = group.statuses.size === 1 ? Array.from(group.statuses)[0] : "Mixed"
    }
    delete group.statuses
  })

  return groups
})

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
const CURRENT_VISIT_STATUSES = ["open", "in progress", "ongoing", "pending", "scheduled"]
let patientWatcherUnsub = null
const ACTIVE_PATIENT_KEYS = [
  "patient_encounter",
  "encounter",
  "encounter_name",
  "encounter_id",
  "clinical_procedure",
  "procedure",
  "procedure_id",
  "current_visit_id",
  "visit_id",
  "visit",
]
const APPOINTMENT_FIELDS = [
  "name",
  "patient",
  "practitioner",
  "practitioner_name",
  "appointment_date",
  "appointment_time",
  "appointment_type",
  "company",
]

const teethData = ref({
  chart: null,
  conditions: [],
  pathology: [],
  restorations: [],
  periodontal: {},
})

function createToothLayout(upperLeft, upperRight, lowerLeft, lowerRight) {
  const upperArch = [...upperLeft, ...upperRight]
  const lowerArch = [...lowerLeft, ...lowerRight]
  return {
    upperLeft,
    upperRight,
    lowerLeft,
    lowerRight,
    upperArch,
    lowerArch,
    all: [...upperArch, ...lowerArch],
  }
}

const TOOTH_LAYOUTS = {
  permanent: createToothLayout(
    ["18", "17", "16", "15", "14", "13", "12", "11"],
    ["21", "22", "23", "24", "25", "26", "27", "28"],
    ["48", "47", "46", "45", "44", "43", "42", "41"],
    ["31", "32", "33", "34", "35", "36", "37", "38"]
  ),
  pediatric: createToothLayout(
    ["55", "54", "53", "52", "51"],
    ["61", "62", "63", "64", "65"],
    ["85", "84", "83", "82", "81"],
    ["71", "72", "73", "74", "75"]
  ),
}

const isPediatricChart = computed(() => Boolean(teethData.value.chart?.is_pediatric))
const activeToothLayout = computed(() =>
  isPediatricChart.value ? TOOTH_LAYOUTS.pediatric : TOOTH_LAYOUTS.permanent
)

const upperLeft = computed(() => activeToothLayout.value.upperLeft)
const upperRight = computed(() => activeToothLayout.value.upperRight)
const lowerLeft = computed(() => activeToothLayout.value.lowerLeft)
const lowerRight = computed(() => activeToothLayout.value.lowerRight)
const ALL_TOOTH_ORDER = computed(() => activeToothLayout.value.all)

const upperArchOrder = computed(() => activeToothLayout.value.upperArch)
const lowerArchOrder = computed(() => activeToothLayout.value.lowerArch)
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
const isProcedureMode = computed(() => selectedAction.value === "procedure")
const isOverviewMode = computed(() => selectedAction.value === "overview")

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

const canSubmitProcedure = computed(() => {
  if (!isProcedureMode.value || !procedurePanelVisible.value) return false
  if (!selectedTeeth.value.length || !selectedProcedureTemplate.value) return false
  return Boolean(procedureForm.restoration_type)
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
const hasActivePanel = computed(() => {
  if (isPeriodontalMode.value && periodontalPanelVisible.value && selectedTooth.value) return true
  if (isPathologyMode.value && pathologyPanelVisible.value && pathologyTooth.value) return true
  if (isRestorationMode.value && restorationPanelVisible.value && restorationTooth.value) return true
  if (isConditionMode.value && conditionPanelVisible.value && conditionTooth.value) return true
  if (isProcedureMode.value && procedurePanelVisible.value) return true
  if (isOverviewMode.value && overviewTooth.value) return true
  return false
})
const overviewCondition = computed(() =>
  overviewTooth.value ? getToothCondition(overviewTooth.value) : null
)
const overviewRestorations = computed(() =>
  overviewTooth.value ? getToothRestorations(overviewTooth.value) : []
)
const overviewPathology = computed(() =>
  overviewTooth.value ? getToothPathology(overviewTooth.value) : []
)
const overviewPeriodontal = computed(() =>
  overviewTooth.value ? getPeriodontal(overviewTooth.value) : null
)
const selectedTeethSummary = computed(() => {
  if (!selectedTeeth.value.length) return "No teeth selected"
  if (selectedTeeth.value.length <= 6) {
    return selectedTeeth.value.join(", ")
  }
  return `${selectedTeeth.value.length} teeth`
})

const filteredProcedureTemplates = computed(() => {
  if (!procedureTemplateSearch.value) return procedureTemplates.value
  const term = procedureTemplateSearch.value.toLowerCase()
  return procedureTemplates.value.filter((template) => {
    return [template.template, template.description, template.item_group]
      .filter(Boolean)
      .some((field) => field.toLowerCase().includes(term))
  })
})

function visitHasChanges(visit) {
  const restorations = visit?.changes?.restorations || []
  const pathology = visit?.changes?.pathology || []
  return restorations.length > 0 || pathology.length > 0
}

function normalizeActivePatient(payload) {
  if (!payload) return null
  const patient = payload.patient || payload.name || payload.id || null
  const appointment = payload.appointment || payload.appointment_id || payload.patient_appointment
  const refs = {}
  ACTIVE_PATIENT_KEYS.forEach((key) => {
    if (payload[key]) refs[key] = payload[key]
  })
  return {
    patient,
    appointment,
    ...refs,
  }
}

async function loadAppointmentDetails(appointmentId) {
  if (!appointmentId) return null
  try {
    const response = await frappe.call("frappe.client.get", {
      doctype: "Patient Appointment",
      name: appointmentId,
      fields: APPOINTMENT_FIELDS,
    })
    return response?.message || null
  } catch (err) {
    console.warn("Failed to load appointment", err)
    return null
  }
}

function applyProcedureAppointmentDefaults() {
  if (!procedureForm.provider && activeAppointment.value?.practitioner) {
    procedureForm.provider = activeAppointment.value.practitioner
  }
  syncProviderControlValue()
}

function readActivePatientContext() {
  try {
    const reader = window?.do_health?.patientWatcher?.read
    if (typeof reader === "function") {
      return normalizeActivePatient(reader())
    }
  } catch (err) {
    console.warn("Failed to read active patient context", err)
  }
  return null
}

function findVisitFromContext(context) {
  if (!context) return null
  const appointment = context.appointment
  const targets = []
  const encounter =
    context.patient_encounter || context.encounter || context.encounter_name || context.encounter_id
  const procedure = context.clinical_procedure || context.procedure || context.procedure_id
  const visitId = context.current_visit_id || context.visit_id || context.visit
  if (encounter) targets.push(`Patient Encounter|${encounter}`)
  if (procedure) targets.push(`Clinical Procedure|${procedure}`)
  if (visitId) targets.push(visitId)
  return (
    visitHistory.value.find(
      (visit) => targets.includes(visit.id) && (!appointment || visit.appointment === appointment)
    ) || null
  )
}

const currentVisitId = computed(() => {
  if (!visitHistory.value.length) return null

  const context = activePatientContext.value
  if (context?.patient && context.patient === currentPatientId.value) {
    const matched = findVisitFromContext(context)
    if (matched?.id) return matched.id
  }

  const active = visitHistory.value.find((entry) =>
    CURRENT_VISIT_STATUSES.includes(String(entry?.status || "").toLowerCase())
  )
  if (active?.id) return active.id
  return visitHistory.value[0]?.id || null
})

function isCurrentVisit(visit) {
  console.log(visit.appointment)
  const raw = localStorage.getItem('do_health_active_patient')
  if (!visit?.appointment) return false
  return visit.appointment === JSON.parse(raw).appointment;
}

function visitRowClass(visit) {
  return {
    expanded: isVisitExpanded(visit?.id),
    current: isCurrentVisit(visit),
  }
}

function groupRowClass(group) {
  const isCurrent = isCurrentAppointment(group)
  const collapsed = isAppointmentCollapsed(group.key)
  return {
    "history-group-row": true,
    "current-appointment": isCurrent,
    collapsed,
  }
}

function isVisitExpanded(id) {
  return expandedVisits.value.includes(id)
}

function isAppointmentCollapsed(key) {
  return collapsedAppointments.value.includes(key)
}

function toggleAppointmentGroup(key) {
  if (!key) return
  const next = new Set(collapsedAppointments.value)
  if (next.has(key)) next.delete(key)
  else next.add(key)
  collapsedAppointments.value = Array.from(next)
}

function isCurrentAppointment(group) {
  if (!group) return false
  if (!group.appointment || !currentAppointmentId.value) return false
  return group.appointment === currentAppointmentId.value
}

function toggleVisitDetails(id) {
  if (!id) return
  const next = new Set(expandedVisits.value)
  if (next.has(id)) next.delete(id)
  else next.add(id)
  expandedVisits.value = Array.from(next)
}

function formatCurrency(value, currency = null) {
  if (value === undefined || value === null || value === "") return ""

  try {
    if (typeof frappe !== "undefined" && frappe.format) {
      const html = frappe.format(value, { fieldtype: "Currency", options: currency })

      // Clean HTML → return plain text only
      const container = document.createElement("div")
      container.innerHTML = html
      return container.textContent.trim()
    }
  } catch (err) {
    // ignore
  }

  const amount = Number(value)
  if (!Number.isFinite(amount)) return value

  const formatter = new Intl.NumberFormat(undefined, {
    style: currency ? "currency" : "decimal",
    currency: currency || "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return formatter.format(amount)
}

function formatVisitTimestamp(date, time) {
  const output = []
  if (date) {
    try {
      if (typeof frappe !== "undefined" && frappe.datetime?.str_to_user) {
        output.push(frappe.datetime.str_to_user(date))
      } else {
        output.push(date)
      }
    } catch (err) {
      output.push(date)
    }
  }
  if (time) {
    try {
      if (typeof frappe !== "undefined" && frappe.datetime?.time_to_user) {
        output.push(frappe.datetime.time_to_user(time))
      } else {
        output.push(time)
      }
    } catch (err) {
      output.push(time)
    }
  }
  return output.join(" · ")
}

function formatPeriodontalSummary(group) {
  if (!group) return "No data"
  const values = Object.values(group || {})
    .map((site) => Number(site?.depth))
    .filter((value) => Number.isFinite(value))
  if (!values.length) return "No data"
  const avg = values.reduce((sum, value) => sum + value, 0) / values.length
  const max = Math.max(...values)
  return `Avg ${avg.toFixed(1)} · Max ${max.toFixed(0)}`
}

function openVisitDocument(visit) {
  if (!visit?.reference_doctype || !visit?.reference_name) return
  if (typeof frappe?.set_route === "function") {
    frappe.set_route("Form", visit.reference_doctype, visit.reference_name)
  }
}

function openInvoice(invoice) {
  if (!invoice?.name) return
  if (typeof frappe?.set_route === "function") {
    frappe.set_route("Form", "Sales Invoice", invoice.name)
  }
}

function toggleVisitActions(visit) {
  if (!visit) return
  activeVisitActionId.value = activeVisitActionId.value === visit.id ? null : visit.id
}

async function markVisitComplete(visit) {
  if (!visit?.reference_doctype || !visit?.reference_name) return
  completingVisitId.value = visit.id
  try {
    await frappe.call("frappe.client.set_value", {
      doctype: visit.reference_doctype,
      name: visit.reference_name,
      fieldname: "status",
      value: "Completed",
    })
    await loadChart(currentPatientId.value)
    activeVisitActionId.value = null
  } catch (err) {
    console.warn("Failed to complete visit", err)
    if (typeof frappe?.show_alert === "function") {
      frappe.show_alert({
        message: err?.message || "Could not mark visit complete.",
        indicator: "orange",
      })
    } else {
      window.alert(err?.message || "Could not mark visit complete.")
    }
  } finally {
    completingVisitId.value = null
  }
}

function createInvoiceForVisit(visit) {
  if (typeof frappe?.set_route !== "function") return
  frappe.route_options = {
    patient: currentPatientId.value || null,
    reference_dt: visit?.reference_doctype,
    reference_dn: visit?.reference_name,
  }
  frappe.set_route("Form", "Sales Invoice", "new-sales-invoice")
}

async function deleteVisit(visit) {
  if (!visit?.reference_doctype || !visit?.reference_name) return
  if (!window.confirm("Delete this visit? Related chart updates will also be removed.")) return
  try {
    deletingVisitId.value = visit.id
    await frappe.call("do_dental.api.delete_visit_reference", {
      doctype: visit.reference_doctype,
      name: visit.reference_name,
    })
    await loadChart(currentPatientId.value)
  } catch (err) {
    console.warn("Failed to delete visit", err)
    if (typeof frappe?.msgprint === "function") {
      frappe.msgprint({
        message: err?.message || "Could not delete visit.",
        title: "Delete Visit",
        indicator: "red",
      })
    } else {
      window.alert(err?.message || "Could not delete visit.")
    }
  } finally {
    deletingVisitId.value = null
  }
}

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
    if (action === "procedure") {
      procedurePanelVisible.value = true
      ensureProcedureTemplates()
      ensureSurfaceOptions()
    } else if (previous === "procedure") {
      procedurePanelVisible.value = false
      clearSelectedTeeth()
      resetProcedureForm()
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

watch(
  () => procedurePanelVisible.value,
  (open) => {
    if (open) {
      ensureProcedureTemplates()
      nextTick(initProviderLinkControl)
    } else {
      destroyProviderLinkControl()
    }
  }
)

watch(
  () => procedureForm.provider,
  () => {
    syncProviderControlValue()
  }
)

watch(visitHistory, () => {
  expandedVisits.value = []
  activeVisitActionId.value = null
})

watch(
  activePatientContext,
  (next) => {
    if (!next || next.patient !== currentPatientId.value) {
      activeAppointment.value = null
      applyProcedureAppointmentDefaults()
      return
    }
    syncActiveAppointmentContext(next)
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
    clearSelectedTeeth()
    resetProcedureForm()
    procedurePanelVisible.value = false
    return
  }
  const samePatient = patientId === currentPatientId.value
  if (samePatient && teethData.value.chart) {
    return
  }
  currentPatientId.value = patientId
  clearChartData()
  clearSelectedTeeth()
  resetProcedureForm()
  procedurePanelVisible.value = false
  syncActiveAppointmentContext(activePatientContext.value)
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
  if (isProcedureMode.value) {
    return selectedTeeth.value.includes(value)
  }
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
  overviewTooth.value = tooth
  if (isProcedureMode.value) {
    handleProcedureSelection(tooth)
    return
  }
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

function ensureUniqueTeeth(list) {
  const seen = new Set()
  const output = []
  list.forEach((entry) => {
    const tooth = String(entry || "").trim()
    if (tooth && !seen.has(tooth)) {
      seen.add(tooth)
      output.push(tooth)
    }
  })
  return output
}

function addToothSelection(tooth) {
  const value = String(tooth)
  if (!selectedTeeth.value.includes(value)) {
    selectedTeeth.value = [...selectedTeeth.value, value]
  }
}

function removeToothSelection(tooth) {
  const value = String(tooth)
  selectedTeeth.value = selectedTeeth.value.filter(t => t !== value)
}

function clearSelectedTeeth() {
  if (!selectedTeeth.value.length) return
  selectedTeeth.value = []
}

function clearOverviewTooth() {
  overviewTooth.value = null
}

function resetOverviewPanel() {
  clearOverviewTooth()
  clearSelectedTeeth()
}

function handleProcedureSelection(tooth, options = {}) {
  if (!tooth) return

  const value = String(tooth)

  if (selectedTeeth.value.includes(value)) {
    removeToothSelection(value)
  } else {
    addToothSelection(value)
  }

  if (!options.fromDrag) {
    procedurePanelVisible.value = true
  }
}

function handleToothDragStart(payload = {}) {
  if (!isProcedureMode.value) {
    if (payload?.tooth) handleToothSelect(payload.tooth)
    return
  }
  dragSelectionState.active = true
  dragSelectionState.mode = payload.remove ? "remove" : "add"
  if (!payload.additive && dragSelectionState.mode !== "remove") {
    clearSelectedTeeth()
  }
  if (payload.tooth) {
    handleProcedureSelection(payload.tooth, { mode: dragSelectionState.mode, fromDrag: true })
  }
  window.addEventListener("mouseup", handleToothDragEnd)
}

function handleToothDragHover(tooth) {
  if (!dragSelectionState.active || !isProcedureMode.value) return
  handleProcedureSelection(tooth, { mode: dragSelectionState.mode, fromDrag: true })
}

function handleToothDragEnd() {
  if (!dragSelectionState.active) return
  dragSelectionState.active = false
  // window.removeEventListener("mouseup", handleToothDragEnd)
}

function resetProcedureForm() {
  Object.assign(procedureForm, {
    restoration_type: "",
    type: "",
    material: "",
    quality: "",
    detail: "",
    crown_material: "",
    crown_type: "",
    crown_base: "",
    crown_implant_type: "",
    surfaces: [],
    provider: "",
    notes: "",
  })
  selectedProcedureTemplate.value = null
  procedureError.value = null
  applyProcedureAppointmentDefaults()
}

function closeProcedurePanel() {
  procedurePanelVisible.value = false
}

function detectRestorationType(template) {
  const target = (template?.template || template?.name || "").toLowerCase()
  if (target.includes("crown")) return "Crown"
  if (target.includes("veneer")) return "Veneer"
  if (target.includes("onlay")) return "Onlay"
  if (target.includes("inlay")) return "Inlay"
  if (target.includes("bridge")) return "Partial Crown"
  return "Filling"
}

function initProviderLinkControl() {
  if (providerLinkControl.value || !procedureProviderRef.value) return

  providerLinkControl.value = frappe.ui.form.make_control({
    parent: procedureProviderRef.value,
    df: {
      fieldtype: "Link",
      options: "Healthcare Practitioner",
      fieldname: "procedure_provider",
      label: "Provider",
      placeholder: "Healthcare Practitioner",
      change() {
        const next = providerLinkControl.value?.get_value() || ""
        if (procedureForm.provider !== next) {
          procedureForm.provider = next
        }
      },
    },
    render_input: true,
  })
  providerLinkControl.value?.set_input(procedureForm.provider || "")
}

function destroyProviderLinkControl() {
  if (!providerLinkControl.value) return
  try {
    providerLinkControl.value?.$wrapper?.remove()
  } catch (err) {
    console.warn("Failed to destroy provider link control", err)
  } finally {
    providerLinkControl.value = null
  }
}

function syncProviderControlValue() {
  if (!providerLinkControl.value) return
  const currentValue = providerLinkControl.value.get_value?.() || ""
  if (currentValue !== (procedureForm.provider || "")) {
    providerLinkControl.value.set_input(procedureForm.provider || "")
  }
}

function ensureProcedureTemplates(force = false) {
  if (procedureTemplatesLoaded.value && !force) return
  loadProcedureTemplates()
}

async function fetchStandardPriceMap(itemCodes) {
  if (!Array.isArray(itemCodes) || !itemCodes.length) return {}
  try {
    const response = await frappe.call("frappe.client.get_list", {
      doctype: "Item Price",
      fields: ["item_code", "price_list_rate", "currency", "price_list"],
      filters: {
        price_list: STANDARD_PRICE_LIST,
        item_code: ["in", itemCodes],
      },
      limit_page_length: 500,
    })
    const map = {}
    ;(response?.message || []).forEach((row) => {
      const code = row.item_code
      if (!code || map[code]) return
      map[code] = {
        rate: row.price_list_rate ?? null,
        currency: row.currency || null,
        price_list: row.price_list || STANDARD_PRICE_LIST,
      }
    })
    return map
  } catch (err) {
    console.warn("Failed to load standard price list rates", err)
    return {}
  }
}

async function loadProcedureTemplates() {
  if (procedureTemplatesLoading.value) return
  procedureTemplatesLoading.value = true
  try {
    const response = await frappe.call("frappe.client.get_list", {
      doctype: "Clinical Procedure Template",
      fields: ["name", "template", "description", "item_group", "rate", "item_code"],
      filters: { disabled: 0 },
      limit_page_length: 100,
      order_by: "modified desc",
    })
    const records = response?.message || []
    const baseTemplates = records.map((record) => ({
      name: record.name,
      template: record.template || record.name,
      description: record.description || "",
      item_group: record.item_group || "",
      item_code: record.item_code || null,
      rate: record.rate || 0,
    }))

    const itemCodes = Array.from(
      new Set(baseTemplates.map((entry) => entry.item_code).filter(Boolean))
    )
    const priceMap = await fetchStandardPriceMap(itemCodes)

    procedureTemplates.value = baseTemplates.map((entry) => {
      const price = entry.item_code ? priceMap[entry.item_code] : null
      return {
        ...entry,
        standard_price: price?.rate ?? null,
        standard_price_currency: price?.currency || null,
        standard_price_list: price?.price_list || null,
      }
    })
    procedureTemplatesLoaded.value = true
  } catch (err) {
    console.warn("Failed to load procedure templates", err)
  } finally {
    procedureTemplatesLoading.value = false
  }
}

function selectProcedureTemplate(template) {
  if (!template) return
  selectedProcedureTemplate.value = template
  if (!procedureForm.restoration_type) {
    procedureForm.restoration_type = detectRestorationType(template)
  }
  if (!procedureForm.type) {
    procedureForm.type = procedureForm.restoration_type
  }
  nextTick(initProviderLinkControl)
}

function buildProcedureRestorationPayload() {
  const payload = {
    restoration_type: procedureForm.restoration_type,
    type: procedureForm.type || procedureForm.restoration_type,
    material: procedureForm.material,
    quality: procedureForm.quality,
    detail: procedureForm.detail,
    crown_material: procedureForm.crown_material,
    crown_type: procedureForm.crown_type,
    crown_base: procedureForm.crown_base,
    crown_implant_type: procedureForm.crown_implant_type,
  }
  if (procedureForm.surfaces?.length) {
    payload.surfaces = procedureForm.surfaces.map((surface) => ({ surface }))
  }
  return payload
}

async function submitProcedure() {
  if (!canSubmitProcedure.value || !currentPatientId.value) return
  savingProcedure.value = true
  procedureError.value = null
  try {
    const appointment = activeAppointment.value
    const provider = procedureForm.provider || appointment?.practitioner || null
    const payload = {
      patient_id: currentPatientId.value,
      template: selectedProcedureTemplate.value?.name || null,
      teeth: selectedTeeth.value,
      restoration: buildProcedureRestorationPayload(),
      procedure: {
        provider,
        appointment: appointment?.name || null,
        company: appointment?.company || null,
        date: appointment?.appointment_date || null,
        time: appointment?.appointment_time || null,
        notes: procedureForm.notes || null,
      },
    }
    await frappe.call("do_dental.api.create_chart_procedure", {
      payload: JSON.stringify(payload),
    })
    await loadChart(currentPatientId.value)
    clearSelectedTeeth()
    resetProcedureForm()
    procedurePanelVisible.value = false
  } catch (err) {
    procedureError.value = err?.message || "Could not save procedure. Please try again."
    console.warn("Failed to save procedure", err)
  } finally {
    savingProcedure.value = false
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

  const upperArch = upperArchOrder.value || []
  const lowerArch = lowerArchOrder.value || []

  addStage(upperArch, ["db", "b", "mb"], "buccal")
  addStage([...upperArch].reverse(), ["ml", "l", "dl"], "palatal")
  addStage(lowerArch, ["db", "b", "mb"], "buccal")
  addStage([...lowerArch].reverse(), ["ml", "l", "dl"], "lingual")

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

async function syncActiveAppointmentContext(context) {
  if (!context || !context.patient || context.patient !== currentPatientId.value) {
    activeAppointment.value = null
    applyProcedureAppointmentDefaults()
    return
  }

  const appointmentId = context.appointment
  if (!appointmentId) {
    activeAppointment.value = null
    applyProcedureAppointmentDefaults()
    return
  }

  if (activeAppointment.value?.name === appointmentId) {
    applyProcedureAppointmentDefaults()
    return
  }

  const details = await loadAppointmentDetails(appointmentId)
  if (details && details.patient === currentPatientId.value) {
    activeAppointment.value = {
      name: details.name,
      patient: details.patient,
      practitioner: details.practitioner,
      practitioner_name: details.practitioner_name || details.practitioner,
      appointment_date: details.appointment_date,
      appointment_time: details.appointment_time,
      appointment_type: details.appointment_type,
      company: details.company,
    }
  } else {
    activeAppointment.value = null
  }
  applyProcedureAppointmentDefaults()
}

const toothEventHandlers = {
  // select: handleToothSelect,
  // "drag-start": handleToothDragStart,
  // "drag-hover": handleToothDragHover,
  // "drag-end": handleToothDragEnd,
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

function toggleChartExpansion(force) {
  if (typeof force === "boolean") {
    chartExpanded.value = force
  } else {
    chartExpanded.value = !chartExpanded.value
  }
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
  const target = String(num)
  const upperArch = upperArchOrder.value || []
  const lowerArch = lowerArchOrder.value || []
  const order = upperArch.includes(target) ? upperArch : lowerArch
  const index = order.indexOf(target)
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
  visitHistory.value = payload?.visits || []
  const toothOrder = ALL_TOOTH_ORDER.value || []
  if (toothOrder.length && (!overviewTooth.value || !toothOrder.includes(overviewTooth.value))) {
    overviewTooth.value = toothOrder[0]
  }
}

function clearChartData() {
  assignTeethData({
    chart: null,
    conditions: [],
    pathology: [],
    restorations: [],
    periodontal: {},
    visits: [],
  })
  overviewTooth.value = null
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
  activePatientContext.value = readActivePatientContext()
  const subscriber = window?.do_health?.patientWatcher?.subscribe
  if (typeof subscriber === "function") {
    patientWatcherUnsub = subscriber((payload) => {
      activePatientContext.value = normalizeActivePatient(payload)
    })
  }
  ensureSurfaceOptions()
  handlePatientChange(currentPatientId.value || props.patientId || "")
})

onBeforeUnmount(() => {
  if (patientWatcherUnsub) {
    try {
      patientWatcherUnsub()
    } catch (err) {
      console.warn("Failed to unsubscribe patient watcher", err)
    } finally {
      patientWatcherUnsub = null
    }
  }
  destroyProviderLinkControl()
})
</script>

<style scoped>
.dental-chart-container {
  position: relative;
  padding: 16px 24px;
  background: #f5f7fb;
  min-height: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;
}

.chart-layout {
  /* flex: 1 1 auto; */
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(0, 0.5fr) minmax(320px, 0.9fr);
  gap: 24px;
  align-items: stretch;
  overflow: hidden;
}

.chart-layout.chart-expanded {
  grid-template-columns: 1fr;
}

.chart-area {
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 24px;
  overflow: auto;
  min-height: 0;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
}

.chart-title h2 {
  margin: 0;
  font-size: 20px;
  color: #101828;
}

.chart-hint {
  margin: 4px 0 0;
  font-size: 13px;
  color: #667085;
}

.chart-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 10px;
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
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 12px;
  cursor: pointer;
}

.legend-button:hover {
  background: #f2f4f7;
}

.expand-button {
  border: 1px solid #0f62fe;
  background: transparent;
  color: #0f62fe;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}

.expand-button:hover {
  background: rgba(15, 98, 254, 0.1);
}

.chart-main {
  margin-top: 16px;
  padding-right: 88px;
}

.chart-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 0;
}

.workflow-stack {
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
  min-height: 0;
}

.chart-layout.chart-expanded .workflow-stack {
  display: none;
}

.actions-card,
.layer-card,
.history-panel,
.action-work-area,
.overview-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.08);
}

.action-work-area {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}

.overview-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.overview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.overview-grid section {
  background: #f9fafb;
  border-radius: 12px;
  padding: 12px;
  min-height: 120px;
}

.overview-grid h5 {
  margin: 0 0 6px;
  font-size: 13px;
  color: #111827;
}

.periodontal-summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.periodontal-summary .label {
  font-size: 11px;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.action-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.action-tabs button {
  flex: 1 1 140px;
  border: 1px solid #d0d5dd;
  border-radius: 32px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  background: #f9fafb;
  color: #475467;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.action-tabs button.active {
  background: #0f62fe;
  border-color: #0f62fe;
  color: #ffffff;
}

.actions-hint {
  margin: 12px 0 0;
  font-size: 13px;
  color: #667085;
}

.layer-card header {
  margin-bottom: 12px;
}

.layer-card header h3 {
  margin: 0;
  font-size: 16px;
  color: #101828;
}

.layer-card header p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #667085;
}

.layer-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 30px;
}

.layer-controls label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #d0d5dd;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 13px;
  color: #475467;
  background: #fff;
}

.layer-controls input {
  accent-color: #33a5de;
}

.action-work-area {
  min-height: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.history-panel {
  width: 100%;
  flex: 0 0 auto;
  max-height: 38vh;
  overflow: auto;
}

.history-table-wrapper {
  overflow: auto;
}

.history-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.history-table tbody tr {
  cursor: pointer;
}

.history-table th,
.history-table td {
  padding: 8px;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
  vertical-align: top;
}

.history-table tr.current {
  background: #eef2ff;
  box-shadow: inset 3px 0 0 #6366f1;
}

.history-table tr.current:hover {
  background: #e5e7ff;
}

.history-group-row {
  background: #f3f4f6;
  font-weight: 600;
  color: #374151;
}

.history-group-row td {
  vertical-align: middle;
}

.history-group-row .group-header {
  font-weight: 600;
  color: #374151;
  padding: 8px 4px;
}

.history-group-row .group-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.history-group-row.current-appointment {
  background: #eef2ff;
  box-shadow: inset 3px 0 0 #6366f1;
}

.history-group-row.current-appointment:hover {
  background: #e5e7ff;
}

.group-title-cell {
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
}

.group-title-cell .chevron {
  display: inline-block;
  transition: transform 0.15s ease;
}

.group-title-cell .chevron.open {
  transform: rotate(90deg);
}

.history-table tbody tr:hover {
  background: #f8fafc;
}

.history-table tr.expanded {
  background: #f4f7ff;
}

.history-table tr.current.expanded {
  background: #e8edff;
}

.history-details-row td {
  background: #f9fafb;
}

.history-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.panel-placeholder {
  margin: 0;
  padding: 24px;
  border: 1px dashed #d0d5dd;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  color: #7a8599;
}

.history-panel header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.history-panel header h3 {
  margin: 0;
  font-size: 16px;
  color: #101828;
}

.history-panel header p {
  margin: 4px 0 0;
  font-size: 13px;
  color: #667085;
}

.history-count {
  background: #eef2ff;
  color: #4338ca;
  font-weight: 600;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 999px;
}

.history-empty {
  margin: 0;
  font-size: 13px;
  color: #667085;
}

.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history-item {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px 16px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.history-row-header {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #475467;
  margin-bottom: 4px;
}

.history-summary {
  margin: 0;
  font-size: 13px;
  color: #111827;
}

.history-date {
  font-size: 12px;
  color: #6b7280;
}

.history-row {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.history-purpose {
  display: block;
  font-size: 12px;
  color: #6b7280;
}

.visit-title {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.visit-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
  color: #6b7280;
  margin: 6px 0;
}

.billing-chip {
  text-align: right;
  min-width: 120px;
  font-size: 12px;
  color: #475467;
}

.billing-chip .amount {
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #101828;
}

.billing-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: #475467;
}

.visit-details {
  margin-top: 8px;
  padding: 12px;
  border-radius: 12px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.visit-details h5 {
  margin: 0;
  font-size: 13px;
  color: #111827;
}

.visit-details ul {
  margin: 0;
  padding-left: 18px;
  font-size: 12px;
  color: #111827;
}

.history-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
}

.invoice-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  border: 1px solid #d0d5dd;
  border-radius: 999px;
  padding: 4px 10px;
  background: #fff;
  font-size: 12px;
  cursor: pointer;
}

.chip.ghost {
  background: transparent;
  border-color: #d0d5dd;
  color: #475467;
}

.text-link.danger {
  color: #b42318;
}

.actions-cell {
  position: relative;
  width: 120px;
}

.visit-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.15);
  display: flex;
  flex-direction: column;
  min-width: 160px;
  z-index: 20;
}

.visit-menu button {
  background: none;
  border: none;
  text-align: left;
  font-size: 12px;
  padding: 8px 12px;
  cursor: pointer;
}

.visit-menu button:hover {
  background: #f3f4f6;
}

.visit-menu button.danger {
  color: #b42318;
}

.history-table-wrapper::-webkit-scrollbar,
.history-panel::-webkit-scrollbar,
.workflow-stack::-webkit-scrollbar,
.action-work-area::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.history-table-wrapper::-webkit-scrollbar-thumb,
.history-panel::-webkit-scrollbar-thumb,
.workflow-stack::-webkit-scrollbar-thumb,
.action-work-area::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.5);
  border-radius: 4px;
}

.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.selection-hint {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 8px 0 0;
  font-size: 13px;
  color: #475467;
}

.text-link {
  border: none;
  background: none;
  color: #0f62fe;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
}

.procedure-panel .selection-overview {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #475467;
}

.procedure-panel .selection-overview strong {
  font-size: 20px;
  color: #101828;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px;
  margin-bottom: 12px;
}

.template-grid button {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #f9fafb;
  padding: 10px 12px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  transition: border-color 0.15s ease, background-color 0.15s ease;
}

.template-grid button.selected {
  border-color: #0f62fe;
  background: rgba(15, 98, 254, 0.08);
}

.teeth-row {
  display: flex;
  justify-content: center;
  margin: 0.2rem 0;
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
  position: relative;
  top: 0;
  flex: 1 1 auto;
  width: 100%;
  max-width: none;
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
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
