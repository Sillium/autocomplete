const completionSpec: Fig.Spec = {
  name: "awshelper",
  description: "Login/logout to AWS via saml2aws",
  subcommands: [
    {
      name: "login",
      description: "Login to AWS account and assume IAM role",
      args: {
        name: "role",
        description: "The AWS IAM Role you want to use",
        isOptional: false,
        generators: {
          script: "cat /Users/hstoerk/.config/awshelper/roles_for_fig.txt",
          postProcess: function (out) {
            return out.split("\n").map((role) => {
              return { name: role, description: "IAM Role" };
            });
          },
        },
      },
    },
    {
      name: "logout",
      description: "Unset the AWS_PROFILE env var",
    },
    {
      name: "who",
      description: "Show info about the currently used AWS account",
    },
    {
      name: "updateroles",
      description: "Update the list of available AWS accounts/IAM roles",
    },
  ],
};

export default completionSpec;
