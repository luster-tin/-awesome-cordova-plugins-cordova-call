import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Cordova Call
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { CordovaCall } from '@awesome-cordova-plugins/cordova-call';
 *
 *
 * constructor(private cordovaCall: CordovaCall) { }
 *
 * ...
 *
 *
 * this.cordovaCall.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class CordovaCall extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param from {string} Some param to configure something
     * @param id {number} Another param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    receiveCall(from: string, id: number, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param to {string} Some param to configure something
     * @param id {number} Another param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    sendCall(to: string, id: number, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    connectCall(success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    endCall(success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    mute(success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    unmute(success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    speakerOn(success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    speakerOff(success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param appName {string} Some param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setAppName(appName: string, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param iconName {string} Some param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setIcon(iconName: string, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param value {string} Some param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setVideo(value: boolean, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param ringtoneName {string} Some param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setRingtone(ringtoneName: string, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param value {string} Some param to configure something
     * @param success {() => void} Another param to configure something
     * @param error {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setIncludeInRecents(value: boolean, success: () => void, error: () => void): Promise<any>;
    /**
     * This function does something
     * @param event {string} Some param to configure something
     * @param handler {() => void} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    on(event: string, handler: () => void): Promise<any>;
}
