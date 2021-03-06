/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Parser } from './Parser';
import { RecognitionException } from "./RecognitionException";
export declare class FailedPredicateException extends RecognitionException {
    private _ruleIndex;
    private _predicateIndex;
    private _predicate?;
    constructor(recognizer: Parser, predicate?: string, message?: string);
    readonly ruleIndex: number;
    readonly predicateIndex: number;
    readonly predicate: string | undefined;
    private static formatMessage(predicate, message);
}
