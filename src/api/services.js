import axios from "axios";

export const autUser = (data) => {
  axios
    .post(`https://${data.subdomain}.ox-sys.com/security/auth_check`, null, {
      params: {
        _username: data.username,
        _password: data.password,
        _subdomain: data.subdomain,
      },
    })
    .then((res) => {
      console.log(res);
    });
};
