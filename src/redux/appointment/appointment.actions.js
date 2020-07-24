import { GET_APPOINTMENTS } from './appointment.constants';
import appointmentService from './appointment.service';

export const getAppointments = (uuid) => async (dispatch) => {
  const response = await appointmentService.getByCalendar(uuid);

  dispatch({
    type: GET_APPOINTMENTS,
    payload: response.result,
  });
};
