/*
 * SPDX-License-Identifier: EUPL-1.2
 * Copyright Regione Piemonte - 2022
 */

export const IS_DEV = process.env.APP_IS_DEV;
export const IS_TEST = process.env.APP_IS_TEST;
export const IS_PROD = process.env.APP_IS_PROD;

export const DELEGATION_STATUS_MAP = {
  ACTIVE: "ATTIVA",
  NOT_ACTIVE: "NON ATTIVA",
  REVOKED: "REVOCATA",
  REFUSED: "RIFIUTATA",
  IS_EXPIRING: "IN_SCADENZA",
  EXPIRED: "SCADUTA",
  UPDATED: "AGGIORNATA"
};

export const DELEGATION_STATUS_LABEL = {
  [DELEGATION_STATUS_MAP.ACTIVE]: "Attiva",
  [DELEGATION_STATUS_MAP.NOT_ACTIVE]: "Non attiva",
  [DELEGATION_STATUS_MAP.REVOKED]: "Revocata",
  [DELEGATION_STATUS_MAP.REFUSED]: "Rifiutata",
  [DELEGATION_STATUS_MAP.IS_EXPIRING]: "In scadenza",
  [DELEGATION_STATUS_MAP.EXPIRED]: "Scaduta",
  [DELEGATION_STATUS_MAP.UPDATED]: "Aggiornata"
};

// Nel caso in cui le API non ci dicano qual è il numero di giorni delegabili del servizio
//    => impostiamo il default a 365 giorni
export const DEFAULT_DELEGATION_DAYS_INTERVAL = 364;

export const DELEGATION_TYPE_CODES = {
  ADULT: "ADULTO"
};

export const DELEGATION_RANK_CODES = {
  STRONG: "FORTE",
  WEAK: "DEBOLE"
};
export const DELEGATION_RANK_LABEL = {
  [DELEGATION_RANK_CODES.STRONG]: "Forte",
  [DELEGATION_RANK_CODES.WEAK]: "Debole"
};

export const DECLARATION_STATUS_CODES = {
  TO_COMPLETE: "DA_COMPLETARE",
  CONFIRM_WAITING: "IN_ATTESA_DI_CONFERMA",
  VALIDATE_USER: "VALIDA",
  VALIDATE_OPERATOR: "ATTIVA",
  EXPIRED: "SCADUTA",
  REVOKED: "REVOCATA",
  REVOKED_WITH_BLOCK: "BLOCCA"
};

export const DECLARATION_DETAILS_STATUS_CODES = {
  TO_APPROVE: "DA_APPROVARE",
  CONFIRM_WAITING: "IN_ATTESA_DI_CONFERMA",
  VALIDATE_USER: "VALIDA",
  VALIDATE_OPERATOR: "ATTIVA",
  EXPIRED: "SCADUTA",
  REVOKED: "REVOCATA",
  REVOKED_WITH_BLOCK: "BLOCCO"
};

export const DECLARATION_STATUS_LABEL = {
  [DECLARATION_STATUS_CODES.TO_COMPLETE]: "Da approvare",
  [DECLARATION_STATUS_CODES.CONFIRM_WAITING]: "In attesa di conferma",
  [DECLARATION_STATUS_CODES.VALIDATE_USER]: "Attiva",
  [DECLARATION_STATUS_CODES.VALIDATE_OPERATOR]: "Attiva",
  [DECLARATION_STATUS_CODES.EXPIRED]: "Scaduta",
  [DECLARATION_STATUS_CODES.REVOKED]: "Revocata",
  [DECLARATION_STATUS_CODES.REVOKED_WITH_BLOCK]: "Bloccata"
};
export const DECLARATION_DETAIL_STATUS_LABEL = {
  [DECLARATION_DETAILS_STATUS_CODES.TO_APPROVE]: "Da approvare",
  [DECLARATION_DETAILS_STATUS_CODES.CONFIRM_WAITING]: "In attesa di conferma",
  [DECLARATION_DETAILS_STATUS_CODES.VALIDATE_USER]: "Attiva",
  [DECLARATION_DETAILS_STATUS_CODES.VALIDATE_OPERATOR]: "Attiva",
  [DECLARATION_DETAILS_STATUS_CODES.EXPIRED]: "Scaduta",
  [DECLARATION_DETAILS_STATUS_CODES.REVOKED]: "Revocata",
  [DECLARATION_DETAILS_STATUS_CODES.REVOKED_WITH_BLOCK]: "Bloccata"
};

export const DECLARATION_TYPES_CODES = {
  PARENTS_MULTI: "CONGIUNTA",
  PARENTS_MONO: "GENITOREMONO",
  PROTECTION_MINOR: "TUTELA",
  PROTECTION_MAJOR: "TUTELA_MAG18",
  SUPPORT: "AMMSOSTEGNO"
};

export const DECLARATION_DOCUMENT_CODES = {
  IDENTITY_CARD: "TIPO_1",
  PATENTE: "TIPO_2"
};

export const DECLARATION_DETAIL_ROLE_CODES = {
  PARENT_1: "GENITORE_1",
  PARENT_2: "GENITORE_2",
  CHILD: "FIGLIO"
};

export const DECLARATION_MODE_CODES = {
  ONLINE: "ON_LINE"
};

// Per quali codici stato consideriamo una delega come valida?
export const DECLARATION_VALID_STATUS = [
  DELEGATION_STATUS_MAP.ACTIVE,
  DELEGATION_STATUS_MAP.IS_EXPIRING
];

export const FSE_CODES =  {
  FSEESE: "FSEESE",
  FSEPREV: "FSEPREV"
};
export const FSE_CODES_LIST = [FSE_CODES.FSEPREV, FSE_CODES.FSEESE];

// @TODO: questi codici dovrebbero cambiare in base all'ambiente su cui sta girando l'applicativo
export const FSE_CODES_MATCH = (IS_DEV || IS_TEST) ?   [
  ['screen_tst', FSE_CODES.FSEPREV],
  ["ESENPAT", FSE_CODES.FSEESE]
]:  [
  ["screen", FSE_CODES.FSEPREV],
  ["ESENPAT", FSE_CODES.FSEESE]
];

export const FORMAT_DATE = "DD/MM/YYYY";

export const EMPTY_PERSON = {
  name: "",
  surname: "",
  birthDate: "",
  birthPlace: "",
  taxCode: "",
  gender: ""
};


// Indica se attivare i nuovi messaggi di arruolamento
export const IS_NEW_ENROLLABLE_ACTIVE = true;
