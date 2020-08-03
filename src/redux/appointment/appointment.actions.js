import { GET_APPOINTMENTS, GET_ALL_APPOINTMENTS } from './appointment.constants';
import { alertSuccess } from '../alert/alert.actions';
import appointmentService from './appointment.service';

export const getAppointments = (uuid, params) => async (dispatch) => {
  const response = await appointmentService.getByCalendar(uuid, params);

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

export const approvalAppointment = (params) => async (dispatch) => {
  const { uuid, end, approved } = { ...params };

  await appointmentService.approval(uuid, { end, approved });

  dispatch(getAllAppointments({ approved: false }));
  alertSuccess('Evénement approuvé !');
};
