const abi = {
  "source": {
    "hash": "0xb5e08464d17696b95733305ceafbe462109610afd0782d956e075e7f406fff91",
    "language": "ink! 4.0.0-alpha.3",
    "compiler": "rustc 1.65.0",
    "build_info": {
      "build_mode": "Debug",
      "cargo_contract_version": "2.0.0-alpha.5",
      "rust_toolchain": "stable-aarch64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "erc20",
    "version": "4.0.0-alpha.3",
    "authors": [
      "Parity Technologies <admin@parity.io>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "total_supply",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          "Creates a new ERC-20 contract with the specified initial supply."
        ],
        "label": "new",
        "payable": false,
        "returnType": null,
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 7
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 7
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "value",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Event emitted when a token transfer occurs."
        ],
        "label": "Transfer"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "spender",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "value",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Event emitted when an approval occurs that `spender` is allowed to withdraw",
          " up to the amount of `value` tokens from `owner`."
        ],
        "label": "Approval"
      }
    ],
    "messages": [
      {
        "args": [],
        "docs": [
          " Returns the total token supply."
        ],
        "label": "total_supply",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "Balance"
          ],
          "type": 0
        },
        "selector": "0xdb6375a8"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "docs": [
          " Returns the account balance for the specified `owner`.",
          "",
          " Returns `0` if the account is non-existent."
        ],
        "label": "balance_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "Balance"
          ],
          "type": 0
        },
        "selector": "0x0f755a56"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "spender",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "docs": [
          " Returns the amount which `spender` is still allowed to withdraw from `owner`.",
          "",
          " Returns `0` if no allowance has been set."
        ],
        "label": "allowance",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "Balance"
          ],
          "type": 0
        },
        "selector": "0x6a00165e"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Transfers `value` amount of tokens from the caller's account to account `to`.",
          "",
          " On success a `Transfer` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `InsufficientBalance` error if there are not enough tokens on",
          " the caller's account balance."
        ],
        "label": "transfer",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 4
        },
        "selector": "0x84a15da1"
      },
      {
        "args": [
          {
            "label": "spender",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Allows `spender` to withdraw from the caller's account multiple times, up to",
          " the `value` amount.",
          "",
          " If this function is called again it overwrites the current allowance with `value`.",
          "",
          " An `Approval` event is emitted."
        ],
        "label": "approve",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 4
        },
        "selector": "0x681266a0"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "value",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Transfers `value` tokens on the behalf of `from` to the account `to`.",
          "",
          " This can be used to allow a contract to transfer tokens on ones behalf and/or",
          " to charge fees in sub-currencies, for example.",
          "",
          " On success a `Transfer` event is emitted.",
          "",
          " # Errors",
          "",
          " Returns `InsufficientAllowance` error if there are not enough tokens allowed",
          " for the caller to withdraw from `from`.",
          "",
          " Returns `InsufficientBalance` error if there are not enough tokens on",
          " the account balance of `from`."
        ],
        "label": "transfer_from",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 4
        },
        "selector": "0x0b396f18"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "total_supply"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x2623dce7",
                      "ty": 0
                    }
                  },
                  "root_key": "0x2623dce7"
                }
              },
              "name": "balances"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0xeca021b7",
                      "ty": 0
                    }
                  },
                  "root_key": "0xeca021b7"
                }
              },
              "name": "allowances"
            }
          ],
          "name": "Erc20"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 3
          }
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 6
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          },
          {
            "name": "E",
            "type": 6
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "InsufficientBalance"
              },
              {
                "index": 1,
                "name": "InsufficientAllowance"
              }
            ]
          }
        },
        "path": [
          "erc20",
          "erc20",
          "Error"
        ]
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 1
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 1
          }
        ],
        "path": [
          "Option"
        ]
      }
    }
  ],
  "version": "4"
};
  
  export default abi;