import { Card, TextInput, Label, Button } from "flowbite-react";
import {LoggedInNavbar} from "../../components/SuperAdminNavbar";
import { RiLockPasswordFill } from "react-icons/ri";


const Settings = () => {
    return(
        <div className="h-screen font-work">
            <LoggedInNavbar activePage={"settings"}/>
            <div className="m-[2%] h-[85%] flex items-center justify-center">
                <Card className=" w-[29rem]">
                    <div className="pb-6">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="oldpassword"
                                value="Old Password"
                                class="font-work"
                                />
                        </div>
                        <TextInput
                            id="oldpassword"
                            icon={RiLockPasswordFill}
                            placeholder="**********"
                            required={true}
                            />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="newpassword"
                                value="New Password"
                                class="font-work"
                                />
                        </div>
                        <TextInput
                            id="newpassword"
                            icon={RiLockPasswordFill}
                            placeholder="**********"
                            required={true}
                            />
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="retypepassword"
                                value="Retype Password"
                                class="font-work"
                                />
                        </div>
                        <TextInput
                            id="retypepassword"
                            icon={RiLockPasswordFill}
                            placeholder="**********"
                            required={true}
                            />
                    </div>

                    <Button>
                        Confirm
                    </Button>
                </Card>
            </div>
        </div>
    );
}

export default Settings;