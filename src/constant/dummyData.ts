export const DUMMY_POST_DATA = {
  content: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 2,
        },
        content: [
          {
            type: "text",
            text: "Error Handling In Javascript",
          },
        ],
      },
      {
        type: "bulletList",
        attrs: {
          tight: true,
        },
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Error handling is a crucial aspect of building robust web applications. In this blog post, we will explore how to handle Firebase authentication and database errors in your JavaScript application. We'll provide you with a comprehensive guide and code snippets to ensure that your users receive clear and user-friendly error messages, enhancing their overall experience.",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "Let's start with Firebase authentication errors. The following JavaScript function takes an error object and displays an appropriate error message using the toast library",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            marks: [
              {
                type: "code",
              },
            ],
            text: "npm install react-hot-toast",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "index.js",
          },
        ],
      },
      {
        type: "codeBlock",
        attrs: {
          language: null,
        },
        content: [
          {
            type: "text",
            text: "export const showRelevantErrorMessage = error => {\n  switch (error.code) {\n    case 'auth/invalid-email':\n      toast.error('The provided email is not valid'.toUpperCase())\n      break\n    case 'auth/email-already-in-use':\n      toast.error('The email provided already exists'.toUpperCase())\n      break\n    case 'auth/weak-password':",
          },
        ],
      },
    ],
  },
  title: "Handling Firebase Authentication and Database Errors in JavaScript",
};
