/*
 * SPDX-License-Identifier: EUPL-1.2
 * Copyright Regione Piemonte - 2022
 */

export const DELEGATION_STATUS_MAP = {
  ACTIVE: "ATTIVA",
  NOT_ACTIVE: "NON ATTIVA",
  REVOKED: "REVOCATA",
  REFUSED: "RIFIUTATA",
  IS_EXPIRING: "IN_SCADENZA",
  EXPIRED: "SCADUTA",
  UPDATED: "AGGIORNATA"
};

export const REPORT_PAYMENT_STATUS_MAP = {
  PAYED: "S",
  NOT_PAYED: "N",
  PARTIALLY_PAYED: "P",
  UNDEFINED: "U",
  EXEMPT: "E",
  REFUND: "R"
};

export const REPORT_PAYMENT_STATUS_LABEL_MAP = {
  [REPORT_PAYMENT_STATUS_MAP.PAYED]: "Pagato",
  [REPORT_PAYMENT_STATUS_MAP.NOT_PAYED]: "Da pagare",
  [REPORT_PAYMENT_STATUS_MAP.PARTIALLY_PAYED]: "Pagato parzialmente",
  [REPORT_PAYMENT_STATUS_MAP.UNDEFINED]: "in fase di aggiornamento",
  [REPORT_PAYMENT_STATUS_MAP.EXEMPT]: "Esente",
  [REPORT_PAYMENT_STATUS_MAP.REFUND]: "Da rimborsare"
};

export const REPORT_TYPE_MAP = {
  // 1       DEA_VERBALE         VERBALE PS
  VERBAL: "DEA_VERBALE",
  // 2       DEA_TRIAGE          TRIAGE
  TRIAGE: "DEA_TRIAGE",
  // 3       REFERTO             REFERTO
  REPORT: "REFERTO",
  // 4       ANAMNESI            ANAMNESI
  HISTORY: "ANAMNESI",
  // 5       SDO                 SDO
  SDO: "SDO",
  // 6       LET_DIMISSIONE      LETTERA DI DIMISSIONE
  DISCHARGE: "LET_DIMISSIONE",
  // 7       REFERTO_CICLO       REFERTO-CICLO
  CYCLE_REPORT: "REFERTO_CICLO",
  // 8       ATTO_OPERATORIO     ATTO OPERATORIO
  OPERATIVE_ACT: "ATTO_OPERATORIO",
  // 9       REFERTO_LIS         REFERTO LIS
  LIS_REPORT: "REFERTO_LIS",
  // 10      REFERTO_RIS         REFERTO REFERTO DI RADIOLOGIA
  RADIOLOGY_REPORT: "REFERTO_RIS",
  // 11      REFERTO_AP          REFERTO DI ANATOMIA PATOLOGICA
  PATHOLOGICAL_ANATOMY_REPORT: "REFERTO_AP",
  // 12      34105-7             LETTERA DI DIMISSIONE OSPEDALIERA
  DISCHARGE_LETTER: "34105-7",
  // 13      59258-4             VERBALE DI PRONTO SOCCORSO
  FIRST_AID_REPORT: "59258-4",
  // 14      11502-2             REFERTO DI LABORATORIO
  LAB_REPORT: "11502-2",
  // 15      68604-8             REFERTO DI RADIOLOGIA
  RADIOLOGY_REPORT_2: "68604-8",
  // 16      11526-1             REFERTO DI ANATOMIA PATOLOGICA
  PATHOLOGICAL_ANATOMY_REPORT_2: "11526-1",
  // 17      11488-4             REFERTO SPECIALISTICO
  SPECIALIZED_REPORT: "11488-4 "
  // CODICI DI RICETTE che non hanno a che fare con ROL
  // 18      57833-6             PRESCRIZIONE FARMACEUTICA
  // 23      57832-8             PRESCRIZIONE DIAGNOSTICA O SPECIALISTICA
  // 24      29304-3             EROGAZIONE FARMACEUTICA
  // 26      81223-0             EROGAZIONE SPECIALISTICA
  // CODICI DI VACCINAZIONI che non hanno a che fare con ROL
  // 27      REG-87273-9         SCHEDA VACCINALE
  // 28      REG-82593-5         CERTIFICATO VACCINALE
};

export const REPORT_TYPE_LABEL_MAP = {
  [REPORT_TYPE_MAP.VERBAL]: "Verbale Ps",
  [REPORT_TYPE_MAP.TRIAGE]: "Triage",
  [REPORT_TYPE_MAP.REPORT]: "Referto",
  [REPORT_TYPE_MAP.HISTORY]: "Anamnesi",
  [REPORT_TYPE_MAP.SDO]: "Sdo",
  [REPORT_TYPE_MAP.DISCHARGE]: "Lettera di dimissione",
  [REPORT_TYPE_MAP.CYCLE_REPORT]: "Referto ciclo",
  [REPORT_TYPE_MAP.OPERATIVE_ACT]: "Atto operatorio",
  [REPORT_TYPE_MAP.LIS_REPORT]: "Referto LIS",
  [REPORT_TYPE_MAP.RADIOLOGY_REPORT]: "Referto di radiologia",
  [REPORT_TYPE_MAP.PATHOLOGICAL_ANATOMY_REPORT]:
    "Referto di anatomia patologica",
  [REPORT_TYPE_MAP.DISCHARGE_LETTER]: "Lettera di dimissione ospedaliera",
  [REPORT_TYPE_MAP.FIRST_AID_REPORT]: "Verbale di pronto soccorso",
  [REPORT_TYPE_MAP.LAB_REPORT]: "Referto di laboratorio",
  [REPORT_TYPE_MAP.RADIOLOGY_REPORT_2]: "Referto di radiologia",
  [REPORT_TYPE_MAP.PATHOLOGICAL_ANATOMY_REPORT_2]:
    "Referto di anatomia patologica",
  [REPORT_TYPE_MAP.SPECIALIZED_REPORT]: "Referto specialistico"
};

// Mappa dei possibili stati della richiesta del download dell'immagine
export const IMAGE_STATUS_MAP = {
  NULL: null,
  ERRORE_WS: "ERRORE_WS",
  NON_PRESENTE: "RICHIESTA_NON_PRESENTE",
  SCARICATO: "SCARICATO",
  DA_ELABORARE: "DA_ELABORARE",
  ELAB_IN_CORSO: "ELAB_IN_CORSO",
  DISPONIBILE: "DISPONIBILE",
  INVIO_MAIL_IN_CORSO: "INVIO_MAIL_IN_CORSO",
  ERRORE_INVIO_MAIL: "ERRORE_INVIO_MAIL",
  NOTIFICATO: "NOTIFICATO",
  COMPOSIZIONE_PACCHETTO_SOSPESA: "COMPOSIZIONE_PACCHETTO_SOSPESA",
  ERRORE_COMPONI_PACCHETTO: "ERRORE_COMPONI_PACCHETTO",
  PACCHETTO_DA_CANCELLARE: "PACCHETTO_DA_CANCELLARE",
  PACCHETTO_IN_CANCELLAZIONE: "PACCHETTO_IN_CANCELLAZIONE",
  CANCELLAZIONE_PACCHETTO_SOSPESA: "CANCELLAZIONE_PACCHETTO_SOSPESA",
  ERRORE_IN_CANCELLAZIONE_PACCHETTO: "ERRORE_IN_CANCELLAZIONE_PACCHETTO",
  PACCHETTO_CANCELLATO: "PACCHETTO_CANCELLATO"
};

export const IMAGE_OS_MAP = {
  WINDOWS: "WINDOWS",
  UNIX: "UNIX",
  MAC: "MAC"
};

export const IMAGE_OS_LABEL_MAP = {
  [IMAGE_OS_MAP.WINDOWS]: "Windows",
  [IMAGE_OS_MAP.UNIX]: "Unix",
  [IMAGE_OS_MAP.MAC]: "Mac"
};

// Quali sono i tipi di referto che possono essere pagati?
export const REPORT_TYPES_PAYABLE_LIST = Object.values(REPORT_TYPE_MAP);

// quali sono i tipi di referto per cui è disponibile download delle immagini?
export const REPORT_TYPE_DOWNLOADABLE_IMAGE_LIST = [
  REPORT_TYPE_MAP.RADIOLOGY_REPORT,
  REPORT_TYPE_MAP.RADIOLOGY_REPORT_2
];

// quali sono gli stati dell'immagine per cui l'utente può prenotarla?
export const REPORT_IMAGE_STATUS_REQUESTABLE_LIST = [
  IMAGE_STATUS_MAP.NULL,
  IMAGE_STATUS_MAP.NON_PRESENTE,
  IMAGE_STATUS_MAP.PACCHETTO_DA_CANCELLARE,
  IMAGE_STATUS_MAP.PACCHETTO_IN_CANCELLAZIONE,
  IMAGE_STATUS_MAP.PACCHETTO_CANCELLATO,
  IMAGE_STATUS_MAP.CANCELLAZIONE_PACCHETTO_SOSPESA,
  IMAGE_STATUS_MAP.ERRORE_IN_CANCELLAZIONE_PACCHETTO
];

// Quali sono gli stati per cui l'immagine risulta "in eleborazione"
export const REPORT_IMAGE_STATUS_IN_ELABORATION_LIST = [
  IMAGE_STATUS_MAP.ERRORE_WS,
  IMAGE_STATUS_MAP.ELAB_IN_CORSO,
  IMAGE_STATUS_MAP.ERRORE_COMPONI_PACCHETTO
];

// Quali sono gli stati dell'immagine per cui l'utente deve contattare l'assistenza?
export const REPORT_IMAGE_STATUS_ERROR_LIST = [
  IMAGE_STATUS_MAP.DA_ELABORARE,
  IMAGE_STATUS_MAP.COMPOSIZIONE_PACCHETTO_SOSPESA
];

// quali sono gli stati dell'immagine per cui l'utente può scaricarla?
export const REPORT_IMAGE_STATUS_DOWNLOADABLE_LIST = [
  IMAGE_STATUS_MAP.DISPONIBILE,
  IMAGE_STATUS_MAP.INVIO_MAIL_IN_CORSO,
  IMAGE_STATUS_MAP.NOTIFICATO,
  IMAGE_STATUS_MAP.ERRORE_INVIO_MAIL,
  IMAGE_STATUS_MAP.SCARICATO
];

// Quali sono gli stati di pagamento per cui è ammesso il download del pagamento?
export const REPORT_PAYMENT_STATUS_DOWNLOADABLE_LIST = [
  REPORT_PAYMENT_STATUS_MAP.PAYED,
  REPORT_PAYMENT_STATUS_MAP.EXEMPT
  //  REPORT_PAYMENT_STATUS_MAP.REFUND,
];

// Quali sono gli stati per cui considerare il pagamento come "da effettuare"?
export const REPORT_PAYMENT_STATUS_PAYABLE_LIST = [
  REPORT_PAYMENT_STATUS_MAP.NOT_PAYED,
  REPORT_PAYMENT_STATUS_MAP.PARTIALLY_PAYED
];

// quanti giorni prima consideriamo un report vicino alla scadenza?
export const REPORT_EXPIRING_DAYS = 5;


export const REPORT_IMAGE_DOWNLOAD_URL = 'url';
