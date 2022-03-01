export default {
  "openapi": "3.0.0",
  "info": {
    "title": "Budget API Documentation",
    "description": "API para gerenciamento e controle de gastos mensais",
    "version": "0.0.1"
  },
  "servers": [
    {
      "url": "/api",
      "description": "Main Production Server"
    }
  ],
  "tags": [
    { "name": "Authentication" },
    { "name": "Budget" },
    { "name": "Expense" },
  ],
  "paths": {
    "/signup": {
      "post": {
        "tags": [
          "Authentication"
        ],
        "summary": "SignUp",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "user_name",
                  "email": "email@email.com",
                  "password": "any_password",
                  "passwordConfirmation": "any_password"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/auth": {
      "post": {
        "tags": [
          "Authentication"
        ],
        "summary": "Auth",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "email": "email@email.com",
                  "password": "any_password"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/budget": {
      "post": {
        "tags": [
          "Budget"
        ],
        "summary": "Add Budget",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "budget_name",
                  "totalRealized": 42,
                  "totalProjected": 420
                }
              }
            }
          }
        },
        "parameters": [
          {
            "name": "x-access-token",
            "in": "header",
            "schema": {
              "type": "string"
            },
            "example": "access_token"
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/budget/budget_id": {
      "delete": {
        "tags": [
          "Budget"
        ],
        "summary": "Delete Budget",
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    },
    "/expense": {
      "post": {
        "tags": [
          "Expense"
        ],
        "summary": "Add Expense",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "expense_name",
                  "category": "expense_category",
                  "realized": 42,
                  "projected": 420,
                  "type": "type",
                  "budgetId": "budget_id"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {}
            }
          }
        }
      }
    }
  }
}