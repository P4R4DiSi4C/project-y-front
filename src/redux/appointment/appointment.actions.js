import { GET_APPOINTMENTS, GET_ALL_APPOINTMENTS } from './appointment.constants';
import appointmentService from './appointment.service';

export const getAppointments = (uuid) => async (dispatch) => {
  const response = await appointmentService.getByCalendar(uuid);

  dispatch({
    type: GET_APPOINTMENTS,
    payload: response.result,
  });
};

export const getAllAppointments = (params) => async (dispatch) => {
  const response = await appointmentService.getAll(params);

  dispatch({
    type: GET_ALL_APPOINTMENTS,
    payload: response.result,
  });
};
