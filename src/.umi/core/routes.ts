// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/CG/3DforFun/ue007.github.io/node_modules/_@umijs_runtime@3.5.17@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/example.html",
        "exact": true,
        "component": require('@/pages/example.js').default
      },
      {
        "path": "/index.html",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('@/pages/index.js').default
      },
      {
        "path": "/page2.html",
        "exact": true,
        "component": require('@/pages/page2.js').default
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
