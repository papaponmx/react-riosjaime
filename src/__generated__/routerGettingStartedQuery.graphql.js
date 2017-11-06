/**
 * @flow
 * @relayHash 718c555f0512c0d85f9372d281f736b8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routerGettingStartedQueryResponse = {|
  +me: ?{| |};
|};
*/


/*
query routerGettingStartedQuery {
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
    "name": "routerGettingStartedQuery",
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
  "name": "routerGettingStartedQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routerGettingStartedQuery",
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
  "text": "query routerGettingStartedQuery {\n  me {\n    ...App_me\n    id\n  }\n}\n\nfragment App_me on User {\n  ...AppToolbar_me\n}\n\nfragment AppToolbar_me on User {\n  displayName\n}\n"
};

module.exports = batch;
