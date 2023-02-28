import React, {useState} from 'react';
import {Modal, TextInput, Label, Button} from 'flowbite-react';
import {FaUserCircle} from "react-icons/fa";
import {toast, Toaster} from "react-hot-toast";
import {toastOptions} from "../../styles/modalOptions.ts";
import {RiLockPasswordFill} from "react-icons/ri";


export const AvatarModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkPassword = async () => {
    if (password !== confirmPassword) {
      toast.error("Passwords do not match", toastOptions);
      return
    }
    setPassword("");
    setConfirmPassword("");
    await toast.promise(
      // TODO replace promise with hook to update password
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      }),
      {
        loading: "Updating password",
        success: "Password successfully updated",
        error: "Error updating password",
      },
      toastOptions
    )
    setIsOpen(false);
  }

  return (
    <React.Fragment>
      <Toaster/>
      <FaUserCircle className="mr-8 cursor-pointer" size={40} onClick={() => setIsOpen(true)}/>
      <Modal
        show={isOpen}
        size="md"
        popup={true}
        onClose={() => setIsOpen(false)}
        className="font-work"
      >
        <Modal.Header/>
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-2xl font-medium text-primary dark:text-white text-center font-bold uppercase">
              Update Password
            </h3>
            <div>
              <div className="block">
                <Label
                  htmlFor="password"
                  value="Your password"
                />
              </div>
              <TextInput
                id="password"
                type="password"
                icon={RiLockPasswordFill}
                required={true}
                placeholder="*********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="block">
                <Label
                  htmlFor="confirmPassword"
                  value="Confirm your Password"
                />
              </div>
              <TextInput
                id="confirmPassword"
                type="password"
                icon={RiLockPasswordFill}
                required={true}
                placeholder="*********"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="w-full">
              <Button type="submit" className="w-full" onClick={checkPassword}>
                UPDATE ACCOUNT
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  )
}