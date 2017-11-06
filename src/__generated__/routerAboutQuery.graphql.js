/**
 * @flow
 * @relayHash a192bf8745cfc20caeff23913d74d07f
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routerAboutQueryResponse = {|
  +me: ?{| |};
|};
*/


/*
query routerAboutQuery {
  me {
    ...App_me
    id
  }
}

fragment App_me on User {
  ...AppToolbar_me
}

fragment AppToolbar_me on User {
  displayName
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "routerAboutQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "App_me",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "routerAboutQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routerAboutQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "User",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "displayName",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query routerAboutQuery {\n  me {\n    ...App_me\n    id\n  }\n}\n\nfragment App_me on User {\n  ...AppToolbar_me\n}\n\nfragment AppToolbar_me on User {\n  displayName\n}\n"
};

module.exports = batch;
