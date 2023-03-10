import React from "react";
import { useMediaQuery } from "@mui/material";
import InfoProfileField from "../components/fields/InfoProfileField";
import HeaderM from "../containers/mobile/HeaderM";
import Header from "../containers/web/Header";
import { Box } from "@mui/material";
import ButtonBack from "../components/buttons/ButtonBack";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile } from "../redux/profile";
import { GetCity } from "../redux/city";

const Profile = () => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const uid = localStorage.getItem("uid");
  const profile = useSelector((state) => state.profile.profile.data);
  const kota = useSelector((state) => state.city.city);
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(GetCity());
    dispatch(GetProfile(uid));
  }, [dispatch, uid]);

  return (
    <>
      {isMobile ? (
        <>
          <HeaderM title="Lengkapi Info Akun" />
          <Box p={1.5} alignItems="center">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>{profile && kota && <InfoProfileField kota={kota} />}</>
            )}
          </Box>
        </>
      ) : (
        <>
          <Header title="Lengkapi Info Akun" />
          <Box
            data-testid="profile-page"
            width="500px"
            height="auto"
            sx={{ margin: "3rem auto" }}
          >
            <ButtonBack left={"33rem"} />
            {loading ? (
              <div>Loading...</div>
            ) : (
              <>{profile && kota && <InfoProfileField kota={kota} />}</>
            )}
          </Box>
        </>
      )}
    </>
  );
};

export default Profile;
