// Type definitions for xp-session-store
// Project: xp-session-store
// Definitions by: Di "JiNXRaT" Ronis <https://github.com/jinxrat>
declare module "xp-session-store" {
    export = xpSessionStore
    class xpSessionStore {
        constructor (options?: xpSessionStore.options)
    }
}
declare namespace xpSessionStore {
    export interface options {
        collection?: string,
        dbname?: string,
        expires?: expiresObject
    }
    export interface expiresObject {
        years: number,
        months: number,
        weeks: number,
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    }
}
