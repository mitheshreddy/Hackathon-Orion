export const LOAD_ALLERGY_SUMMARY = 'LOAD_ALLERGY_SUMMARY';
export const LOAD_ALLERGY_SUMMARY_SUCCEEDED = 'LOAD_ALLERGY_SUMMARY_SUCCEEDED';
export const LOAD_ALLERGY_SUMMARY_FAILED = 'LOAD_ALLERGY_SUMMARY_FAILED';

export function loadAllergySummary(service, patientId) {
  return {
    type: LOAD_ALLERGY_SUMMARY,
    data: {
      service,
      patientId,
    },
  };
}
