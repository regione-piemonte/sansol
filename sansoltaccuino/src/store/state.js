/*
 * SPDX-License-Identifier: EUPL-1.2
 * Copyright Regione Piemonte - 2022
 */

export default function() {
  return {
    config: {},
    user: null,
    userInfo: null,
    notifyContacts: null,
    fcmToken: null,
    enrollmentInfo: null,
    enrollmentConsent: null,
    delegatorList: [],
    delegatorSelected: null,
    delegatorSelectedEnrollmentInfo: null,
    delegatorSelectedEnrollmentConsent: null,
    isDelegatorSelectedPiedmont: false,
    isNotebookHiddenToDelegator: false,
    isNotebookClosed: false,
    notebook: null,
    measureUnitConfig: [],
    delegatorListError:false,
  };
}
