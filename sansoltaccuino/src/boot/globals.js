/*
 * SPDX-License-Identifier: EUPL-1.2
 * Copyright Regione Piemonte - 2022
 */

import LmsButton from "components/core/LmsButton";
import LmsButtons from "components/core/LmsButtons";
import LmsInnerLoading from "components/core/LmsInnerLoading";
import LmsPage from "components/core/LmsPage";
import LmsPageTitle from "components/core/LmsPageTitle";
import TacPage from "components/TacPage";

export default ({ app, router, store, Vue }) => {
  Vue.component(LmsButton.name, LmsButton);
  Vue.component(LmsButtons.name, LmsButtons);
  Vue.component(LmsInnerLoading.name, LmsInnerLoading);
  Vue.component(LmsPage.name, LmsPage);
  Vue.component(LmsPageTitle.name, LmsPageTitle);
  Vue.component(TacPage.name, TacPage);
};
