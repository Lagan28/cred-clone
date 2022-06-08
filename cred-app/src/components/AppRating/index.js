import React from "react";

import Button from "../common/Button";
import "./appRating.css";

const getIosPrefix = () => {
    return (
        <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
            className="app-rating-icon"
            alt=""
        />
    );
};

const getAndroidPrefix = () => {
    return (
        <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
            className="app-rating-icon"
            alt=""
        />
    );
};
const AppRating = () => {
    return (
        <div className="max-width flex flex-col app-rev">
            <div className="app-rating flex">
                <div className="flex app-rating-block flex-col">
                    <div className="flex">
                        <div className="app-rating-value flex flex-col">
                            4.8
                            <img
                                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
                                className="app-rating-stars"
                                alt=""
                            />
                        </div>
                        <div className="app-rating-platform">
                            app <br /> store
                        </div>
                    </div>
                    <div className="non-mobile">
                        <Button
                            prefix={getIosPrefix()}
                            buttonText="Download the app"
                            customClass="app-rating-button"
                        />
                    </div>
                </div>
                <div className="flex app-rating-block flex-col">
                    <div className="flex">
                        <div className="app-rating-value flex flex-col">
                            4.7
                            <img
                                src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-android.png"
                                className="app-rating-stars"
                                alt=""
                            />
                        </div>
                        <div className="app-rating-platform">
                            play <br /> store
                        </div>
                    </div>
                    <div className="non-mobile">
                        <Button
                            prefix={getAndroidPrefix()}
                            buttonText="Download the app"
                            customClass="app-rating-button"
                        />
                    </div>
                </div>
                <div className="only-mobile">
                    <Button buttonText="Download the app" />
                </div>
            </div>
            {/*<div className="flex slider-reviews non-mobile">
                <div className="slider-spotlight"></div>
                <div className="slider-container">
                    <p>this is a great app loaded with functionality and simplicity yet elegant and intuitive. a
                        must have for the plastic money users. keeps me in financial discipline and helps me
                        take the billing and payment worries out of my mind.</p>
                    <br />
                    <h5>ranesh bhattacharya</h5>
                </div>
                <div className="slider-container">
                    <p>in love! such a seamless user experience, smooth as freshly waxed pair of legs! very
                        intuitive and easy to use application. good job people, good job.</p>
                    <br />
                    <h5>parul mehra</h5>
                </div>
                <div className="slider-container">
                    <p>great app, paying dues of credit card was never that much easy and fast. few more
                        rewarding features also available there like showing credit score, can easily pay rent,
                        getting cashback whenever paying cc dues. lots more. i really loves cred.</p>
                    <br />
                    <h5>sanjeev kataria</h5>
                </div>
            </div>*/}
        </div>
    );
};

export default AppRating;