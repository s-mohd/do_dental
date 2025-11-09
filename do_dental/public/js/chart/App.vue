<template>
  <div>
    <DentalChart :projection="projection" :patient-id="patientId" />
  </div>
</template>

<script setup>
import DentalChart from "./DentalChart.vue"
import { onMounted, ref } from "vue"

const projection = ref("buccal")
const patientId = ref("")

function resolvePatientId() {
  try {
    const url = new URL(window.location.href)
    const fromQuery = url.searchParams.get("patient")
    if (fromQuery) {
      return fromQuery
    }
  } catch (err) {
    console.warn("Unable to read patient from URL", err)
  }
  try {
    const stored = window.localStorage?.getItem("do_health_active_patient")
    if (stored) return stored
  } catch (err) {
    console.warn("Unable to read patient from local storage", err)
  }
  return ""
}

onMounted(() => {
  const resolved = resolvePatientId()
  patientId.value = JSON.parse(resolved).patient
  if (resolved) {
    try {
      window.localStorage?.setItem("do_health_active_patient", resolved)
    } catch (err) {
      console.warn("Unable to persist patient identifier", err)
    }
  }
})
</script>

<style scoped>
@import './chart.css';
</style>
