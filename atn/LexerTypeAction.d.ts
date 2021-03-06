/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Lexer } from '../Lexer';
import { LexerAction } from './LexerAction';
import { LexerActionType } from './LexerActionType';
/**
 * Implements the {@code type} lexer action by setting `Lexer.type`
 * with the assigned type.
 *
 * @author Sam Harwell
 * @since 4.2
 */
export declare class LexerTypeAction implements LexerAction {
    private readonly _type;
    /**
     * Constructs a new {@code type} action with the specified token type value.
     * @param type The type to assign to the token using `Lexer.type`.
     */
    constructor(type: number);
    /**
     * Gets the type to assign to a token created by the lexer.
     * @return The type to assign to a token created by the lexer.
     */
    readonly type: number;
    /**
     * {@inheritDoc}
     * @return This method returns {@link LexerActionType#TYPE}.
     */
    readonly actionType: LexerActionType;
    /**
     * {@inheritDoc}
     * @return This method returns {@code false}.
     */
    readonly isPositionDependent: boolean;
    /**
     * {@inheritDoc}
     *
     * <p>This action is implemented by setting `Lexer.type` with the
     * value provided by `type`.</p>
     */
    execute(lexer: Lexer): void;
    hashCode(): number;
    equals(obj: any): boolean;
    toString(): string;
}
