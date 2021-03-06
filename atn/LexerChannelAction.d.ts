/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Lexer } from '../Lexer';
import { LexerAction } from './LexerAction';
import { LexerActionType } from './LexerActionType';
/**
 * Implements the {@code channel} lexer action by calling
 * {@link Lexer#setChannel} with the assigned channel.
 *
 * @author Sam Harwell
 * @since 4.2
 */
export declare class LexerChannelAction implements LexerAction {
    private readonly _channel;
    /**
     * Constructs a new {@code channel} action with the specified channel value.
     * @param channel The channel value to pass to {@link Lexer#setChannel}.
     */
    constructor(channel: number);
    /**
     * Gets the channel to use for the {@link Token} created by the lexer.
     *
     * @return The channel to use for the {@link Token} created by the lexer.
     */
    readonly channel: number;
    /**
     * {@inheritDoc}
     * @return This method returns {@link LexerActionType#CHANNEL}.
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
     * <p>This action is implemented by calling {@link Lexer#setChannel} with the
     * value provided by {@link #getChannel}.</p>
     */
    execute(lexer: Lexer): void;
    hashCode(): number;
    equals(obj: any): boolean;
    toString(): string;
}
