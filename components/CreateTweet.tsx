/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MyTextArea from "./TextFields";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";

const placeholder =
  "https://imgs.search.brave.com/jcaF8tRD_eoNPU17tIdF3_L_uuDtfugd3aeESYC7zQ0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/VG1rSUgzLURtaWlK/cl9IZ05CaUhnSGFI/YSZwaWQ9QXBp";

const supportedFormats = [
  "image/jpeg",
  "image/jpg",
  "image/gif",
  "video/mp4",
  "image/png",
];
export type TweetsProps = {
  message: string;
  file: string | undefined | null;
  username: string | undefined | null;
  userProfile: string | undefined | null;
  createdAt: number;
  likes: number;
  dislikes: number;
};
const CreateTweet = ({ setIsCreate }: any) => {
  const [fileU, setFile] = useState<Blob | any>();
  const [type, setType] = useState<string>("");
  const [abc, setAbc] = useState<any>();
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const { user } = useUser();
  const [data, setData] = useState<TweetsProps[]>();
  console.log("file", type);

  const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    if (fileU) {
      getBase64(fileU).then((base64) => {
        setAbc(base64);
        // console.debug("file stored",base64);
      });
    }
  }, [fileU]);

  useEffect(() => {
    console.log();
    const localData = localStorage.getItem("tweets");
    if (localData !== null) {
      setData(JSON.parse(localData));
    }
  }, []);
  const validate = Yup.object({
    message: Yup.string().max(200).required("Required."),
    file: Yup.mixed()
      .test(
        "FILE_SIZE",
        "Uploaded file is too big.",
        (value) => value || (value && value.size <= 7 * 1024 * 1024)
      )
      .test(
        "FILE_FORMAT",
        "uploaded file has unsupported format",
        (value) =>
          value ||
          (value && supportedFormats.includes(value?.type.split("/")[1]))
      ),
  });
  return (
    <div className="main-container">
      <Formik
        initialValues={{
          message: "",
          file: new Blob(),
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          // console.log(values);
          const userTweet: TweetsProps = {
            message: values.message,
            file: abc,
            username: user?.name,
            userProfile: user?.picture,
            createdAt: new Date().getTime(),
            likes: 0,
            dislikes: 0,
          };
          if (data?.length) {
            localStorage.setItem(
              "tweets",
              JSON.stringify([...data, userTweet])
            );
          } else {
            localStorage.setItem("tweets", JSON.stringify([userTweet]));
          }
          setIsCreate(false);
          Router.reload();
        }}
      >
        {/* eslint-disable-next-line */}
        {({ values, setFieldValue }) => (
          <div>
            <Form className="create-container" data-testid="form">
              <div className="message-container">
                <MyTextArea
                  name="message"
                  type="text-area"
                  rows="5"
                  maxLength="201"
                />
                <div className="error">
                  <ErrorMessage name="message" />
                </div>
              </div>
              <input
                id="input-file"
                name="file"
                type="file"
                hidden
                onChange={(event: any) => {
                  setFieldValue("file", event.target.files![0]);
                  setFile(event.target.files[0]);
                  setType(event.target.files[0].type);
                  setPreviewUrl(URL.createObjectURL(event.target.files![0]));
                }}
              />
              {/* {values.file ? ( */}
              <div className="image-container">
                {/* eslint-disable-next-line */}
                {type !== "video/mp4" ? (
                  <img
                    src={previewUrl ? previewUrl : placeholder}
                    alt="preview image"
                    className="image-preview"
                  />
                ) : (
                  <video width="300" controls className="image-preview">
                    <source src={previewUrl ? previewUrl : placeholder} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video>
                )}

                {/* )} */}
                <div className="error">
                  <ErrorMessage name="file" />
                </div>
              </div>
              {/* // ) : ( */}
              <label htmlFor="input-file" className="fileIcon">
                <BsImages />
              </label>
              <div className="button-container">
                <button
                  type="button"
                  className="create-button"
                  onClick={() => setIsCreate(false)}
                >
                  Close
                </button>
                <button type="submit" className="create-button">
                  Tweet
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default CreateTweet;
