/**
 * @flow
 * @relayHash 4b23b2eac0e11a3dcbc7a7c5981c80a3
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type routerHomeQueryResponse = {|
  +me: ?{| |};
  +stories: ?{| |};
|};
*/


/*
query routerHomeQuery {
  me {
    ...App_me
    id
  }
  stories(first: 50) {
    ...Home_stories
  }
}

fragment App_me on User {
  ...AppToolbar_me
}

fragment Home_stories on StoryConnection {
  edges {
    node {
      id
      title
    }
  }
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
    "name": "routerHomeQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 50,
            "type": "Int"
          }
        ],
        "concreteType": "StoryConnection",
        "name": "stories",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Home_stories",
            "args": null
          }
        ],
        "storageKey": "stories{\"first\":50}"
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "routerHomeQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "routerHomeQuery",
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
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 50,
            "type": "Int"
          }
        ],
        "concreteType": "StoryConnection",
        "name": "stories",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "StoryEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Story",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "title",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "stories{\"first\":50}"
      }
    ]
  },
  "text": "query routerHomeQuery {\n  me {\n    ...App_me\n    id\n  }\n  stories(first: 50) {\n    ...Home_stories\n  }\n}\n\nfragment App_me on User {\n  ...AppToolbar_me\n}\n\nfragment Home_stories on StoryConnection {\n  edges {\n    node {\n      id\n      title\n    }\n  }\n}\n\nfragment AppToolbar_me on User {\n  displayName\n}\n"
};

module.exports = batch;
