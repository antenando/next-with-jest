import { IConfig } from "overmind";
import { createConnect, IConnect } from "overmind-react";
import { merge, namespaced } from "overmind/config";
import * as testingOvermind from "./testingOvermind";
import * as React from "react";

export const config = namespaced({
  testingOvermind,
});

export class Component extends React.Component {}

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export interface Connect extends IConnect<typeof config> {}

export const connect = createConnect<typeof config>();
