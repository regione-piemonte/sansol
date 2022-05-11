/*
 * SPDX-License-Identifier: EUPL-1.2
 * Copyright Regione Piemonte - 2022
 */

import { DELEGATION_STATUS_MAP } from "src/services/config";
import {isEmpty} from "src/services/utils";
import {getUserMinor} from "src/services/business-logic";

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
  return !isEmpty(getters["getUser"])
};

export const getTaxCode = state => {
  if (!state.delegatorSelected) return state.user?.cf;
  return state.delegatorSelected.codice_fiscale_delega;
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


export const isDelegationActive = state => {
  return state.delegatorSelected !== null;
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

export const getCurrentPin = state =>{
  return state.currentPin
}

export const getCurrentPayslip = state =>{
  return state.currentPayslip
}

export const getPayslipErrMessage = state =>{
  return state.payslipErrMessage
}

export const getUserApplicationsList = (state) => {
  return state.userApplicationsList ?? [];
};


// Permette di ottenere le associazioni utente-applicazione , dato un id applicazione
export const userAppInfo =(state, getters) => {
  let appList = getters["getUserApplicationsList"];
  let workingApp = getters["getWorkingApp"]
  let appId= workingApp?.id
  if (!appList) return undefined
  return appList.find(app => app.applicazione_id === appId)
}

export const getDelegatorListError = (state) => {
  return state.delegatorListError;
};

export const isUserMinor = state =>{
  let taxCode =  state.user?.cf;
  if(!taxCode) return false
  return getUserMinor(taxCode)

}
