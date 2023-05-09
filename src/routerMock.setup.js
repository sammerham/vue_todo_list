import { config } from "@vue/test-utils";
import { beforeEach } from "vitest";
import {
  createRouterMock,
  injectRouterMock,
  VueRouterMock,
} from "vue-router-mock";

// create one router per test file
const router = createRouterMock();
beforeEach(() => {
  injectRouterMock(router);
});

// Add properties to the wrapper
config.plugins.VueWrapper.install(VueRouterMock);
