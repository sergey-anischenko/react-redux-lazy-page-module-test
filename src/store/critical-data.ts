export const CRITICAL_DATA_STATE_NAME = 'criticalData';

interface ICriticalData {
  data: object | null;
}

const initialCriticalDataState: ICriticalData = {
  data: null,
};

export const criticalDataReducer = (state: ICriticalData = initialCriticalDataState) => state;
