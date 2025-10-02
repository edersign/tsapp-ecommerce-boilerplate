{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_latest
  ];
  idx.extensions = [ "bradlc.vscode-tailwindcss" "dbaeumer.vscode-eslint" "esbenp.prettier-vscode" "rvest.vs-code-prettier-eslint" "YoavBls.pretty-ts-errors"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--host"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}