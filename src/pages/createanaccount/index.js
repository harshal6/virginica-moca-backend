import React from "react";
import CreateAnAccount from "../../components/CreateAccount"

const CreateAnGiftAccount = ({ location }) => {

    console.log("location", location)

    return (
        <CreateAnAccount memberShip={location?.state?.memberShip}></CreateAnAccount>
    )
}

export default CreateAnGiftAccount