<template>
  <div>
    <DentalChart :projection="projection" :patient-id="patientId" />
  </div>
</template>

<script setup>
import DentalChart from "./DentalChart.vue"
import { onMounted, onBeforeUnmount, ref } from "vue"

const projection = ref("buccal")
const patientId = ref("")

function updatePatient(newPatient) {
  if (!newPatient) {
    patientId.value = ""
    $('[title="Chart"]').text("Chart")
    return
  }

  patientId.value = newPatient.patient
  $('[title="Chart"]').text(`Chart - ${newPatient.patient_name || ""}`)
}

let unsubscribe = null

onMounted(() => {
  // Subscribe to patientWatcher
  if (window.do_health?.patientWatcher) {
    unsubscribe = window.do_health.patientWatcher.subscribe(updatePatient)
  }

  // Initialize immediately with stored patient
  const current = window.do_health?.patientWatcher?.read()
  updatePatient(current)
})

onBeforeUnmount(() => {
  if (unsubscribe) unsubscribe()
})
</script>

<style scoped>
@import './chart.css';
</style>
