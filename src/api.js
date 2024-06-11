import axios from 'axios';

export const getEventList = async (type, on) => {
  try {
    const response = await axios.get(
      `https://demo.api.luxuryjewelrynetwork.com/ProductRESTService.svc/eventlist_v1?type=${type}&on=${on}`
    );

    return {
      status: response.status,
      statusCode: response.data.status,
      message: response.data.message,
      data: response.data.data,
    };
  } catch (error) {
    return {
      status: error.response.status,
      statusCode: error.response.data.status,
      message: error.response.statusText,
      data: {},
    };
  }
};

export const checkRsvpProgress = async (eventId, type) => {
  try {
    type = 'new';
    const response = await axios.get(
      `https://demo.api.luxuryjewelrynetwork.com/ProductRESTService.svc/checkifrsvpenroll_v1?eventid=${eventId}&type=${type}`
    );

    return {
      status: response.status,
      message: response.data.message,
      data: response.data?.data[0],
      statusCode: response.data.status,
    };
  } catch (error) {
    return {
      statusCode: error.response?.data?.status,
      status: error.response.status,
      message: error.response.data.message,
      data:
        (error?.response?.data?.data && error?.response?.data?.data[0]) || null,
    };
  }
};
