import React, {useState, useEffect} from "react";
import { Toaster } from "react-hot-toast";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { FaUserAlt, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import {AiOutlineUserAdd} from "react-icons/ai";

export const AddAccountModal = () => {
    const [isOpen, setIsOpen] = useState(false);


    return(
        <React.Fragment>
            <Toaster/>
            <Button onClick={() => setIsOpen(true)} className="font-work mr-2">
                    <FaUserAlt className="mr-2"/>
                    Add Account
            </Button>
            <Modal
                show={isOpen}
                size="md"
                popup={true}
                onClose={() => setIsOpen(false)}
                className="font-work"
            >
                
                <Modal.Header>
                    <h1 className="text-xl text-primary font-bold pt-3 pl-4">
                        Add Account
                    </h1>
                </Modal.Header>
                <Modal.Body>
                    <div className="p-2">
                        <div className="mb-2">
                            <div className="block">
                                <Label
                                    htmlFor="firstname"
                                    value="First Name"
                                    class="font-work"
                                    />
                            </div>
                            <TextInput
                                id="firstname"
                                placeholder="First Name"
                                required={true}
                                />
                        </div>


                        <div className="mb-2">
                            <div className="block">
                                <Label
                                    htmlFor="lastname"
                                    value="Last Name"
                                    class="font-work"
                                    />
                            </div>
                            <TextInput
                                id="lastname"
                                placeholder="Last Name"
                                required={true}
                                />
                        </div>

                        <div className="mb-2">
                            <div className="block">
                                <Label
                                    htmlFor="username"
                                    value="Username"
                                    class="font-work"
                                    />
                            </div>
                            <TextInput
                                id="username"
                                placeholder="Username"
                                icon={FaUser}
                                required={true}
                                />
                        </div>

                        <div className="mb-6">
                            <div className="block">
                                <Label
                                    htmlFor="password"
                                    value="Password"
                                    class="font-work"
                                    />
                            </div>
                            <TextInput
                                id="password"
                                placeholder="**********"
                                icon={RiLockPasswordFill}
                                required={true}
                                />
                        </div>

                        <Button className="w-full">
                            <AiOutlineUserAdd className="mr-2"/>
                            Add Account
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}