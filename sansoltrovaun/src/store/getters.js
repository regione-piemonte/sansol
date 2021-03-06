/*
 * SPDX-License-Identifier: EUPL-1.2
 * Copyright Regione Piemonte - 2022
 */

import { DELEGATION_STATUS_MAP } from "src/services/config";
import {isEmpty} from "src/services/utils";

export const getAppList = state => {
  return state.config?.apps ?? [];
};

export const getFcmVapidKey = state => {
  return state.config?.fcm?.vapid_key;
};

export const getFcmConfig = state => {
  return state.config?.fcm?.config;
};

export const getFcmToken = state => {
  return state.fcmToken;
};

export const getUser = state => {
  return state.user;
};
export const isUserLogged = (state, getters) => {
  return  !isEmpty(getters["getUser"])
};

export const getUserInfo = state => {
  return state.userInfo;
};

export const getNotifyContacts = state => {
  return state.notifyContacts;
};

export const getEnrollmentInfo = state => {
  return state.enrollmentInfo;
};

export const getDelegatorList = state => {
  return state.delegatorList;
};

export const getDelegatorSelected = state => {
  return state.delegatorSelected;
};

export const getWorkingApp = (state, getters) => {
  let appList = getters["getAppList"];
  return appList?.find(a => a.codice === process.env.APP_CODE);
};

export const getWorkingAppDelegatorList = (state, getters) => {
  let delegatorList = getters["getDelegatorList"];
  let workingApp = getters["getWorkingApp"];
  let code = workingApp?.codice_servizio;
  let delegationValidStatusList = [
    DELEGATION_STATUS_MAP.ACTIVE,
    DELEGATION_STATUS_MAP.IS_EXPIRING
  ];

  return delegatorList.filter(delegator => {
    let delegationList = delegator?.deleghe ?? [];
    let result = delegationList.some(delegation => {
      return (
        code === delegation.codice_servizio &&
        delegationValidStatusList.includes(delegation.stato_delega)
      );
    });

    return result;
  });
};

export const getActiveService = state => {
  return state.activeService?.id;
};


export const getUserDomicile = (state, getters) => {
  let userInfo = getters["getUserInfo"];
  let domicile = userInfo?.info_anag?.domicilio
  return domicile ?? null
};

export const getUserAddress = state => {
  return state.userAddress;
};

export const getDoctorTypes = state => {
  return state.doctorTypes;
};

export const getFacilitiesTypes = state => {
  return state.facilitiesTypes;
};

export const getHospitalsTypes = state => {
  return state.hospitalsTypes;
};

export const getCeliacStoresTypes = state => {
  return state.celiacStoresTypes;
};

export const isShowMap= state => {
  return state.showResultsOnMap;
};

export const isFirstAccess= state => {
  return state.isFirstAccess;
};

