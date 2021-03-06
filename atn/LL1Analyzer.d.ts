/*!
 * Copyright 2016 The ANTLR Project. All rights reserved.
 * Licensed under the BSD-3-Clause license. See LICENSE file in the project root for license information.
 */
import { Array2DHashSet } from '../misc/Array2DHashSet';
import { ATN } from './ATN';
import { ATNConfig } from './ATNConfig';
import { ATNState } from './ATNState';
import { BitSet } from '../misc/BitSet';
import { IntervalSet } from '../misc/IntervalSet';
import { PredictionContext } from './PredictionContext';
export declare class LL1Analyzer {
    /** Special value added to the lookahead sets to indicate that we hit
     *  a predicate during analysis if {@code seeThruPreds==false}.
     */
    static readonly HIT_PRED: number;
    atn: ATN;
    constructor(atn: ATN);
    /**
     * Calculates the SLL(1) expected lookahead set for each outgoing transition
     * of an {@link ATNState}. The returned array has one element for each
     * outgoing transition in {@code s}. If the closure from transition
     * <em>i</em> leads to a semantic predicate before matching a symbol, the
     * element at index <em>i</em> of the result will be {@code null}.
     *
     * @param s the ATN state
     * @return the expected symbols for each outgoing transition of {@code s}.
     */
    getDecisionLookahead(s: ATNState | undefined): (IntervalSet | undefined)[] | undefined;
    /**
     * Compute set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     *
     * <p>If {@code ctx} is {@code null} and the end of the rule containing
     * {@code s} is reached, {@link Token#EPSILON} is added to the result set.
     * If {@code ctx} is not {@code null} and the end of the outermost rule is
     * reached, {@link Token#EOF} is added to the result set.</p>
     *
     * @param s the ATN state
     * @param ctx the complete parser context, or {@code null} if the context
     * should be ignored
     *
     * @return The set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     */
    LOOK(s: ATNState, ctx: PredictionContext): IntervalSet;
    /**
     * Compute set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     *
     * <p>If {@code ctx} is {@code null} and the end of the rule containing
     * {@code s} is reached, {@link Token#EPSILON} is added to the result set.
     * If {@code ctx} is not {@code PredictionContext#EMPTY_LOCAL} and the end of the outermost rule is
     * reached, {@link Token#EOF} is added to the result set.</p>
     *
     * @param s the ATN state
     * @param stopState the ATN state to stop at. This can be a
     * {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx the complete parser context, or {@code null} if the context
     * should be ignored
     *
     * @return The set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     */
    LOOK(s: ATNState, ctx: PredictionContext, stopState: ATNState | null): IntervalSet;
    /**
     * Compute set of tokens that can follow {@code s} in the ATN in the
     * specified {@code ctx}.
     * <p/>
     * If {@code ctx} is {@link PredictionContext#EMPTY_LOCAL} and
     * {@code stopState} or the end of the rule containing {@code s} is reached,
     * {@link Token#EPSILON} is added to the result set. If {@code ctx} is not
     * {@link PredictionContext#EMPTY_LOCAL} and {@code addEOF} is {@code true}
     * and {@code stopState} or the end of the outermost rule is reached,
     * {@link Token#EOF} is added to the result set.
     *
     * @param s the ATN state.
     * @param stopState the ATN state to stop at. This can be a
     * {@link BlockEndState} to detect epsilon paths through a closure.
     * @param ctx The outer context, or {@link PredictionContext#EMPTY_LOCAL} if
     * the outer context should not be used.
     * @param look The result lookahead set.
     * @param lookBusy A set used for preventing epsilon closures in the ATN
     * from causing a stack overflow. Outside code should pass
     * {@code new HashSet<ATNConfig>} for this argument.
     * @param calledRuleStack A set used for preventing left recursion in the
     * ATN from causing a stack overflow. Outside code should pass
     * {@code new BitSet()} for this argument.
     * @param seeThruPreds {@code true} to true semantic predicates as
     * implicitly {@code true} and "see through them", otherwise {@code false}
     * to treat semantic predicates as opaque and add {@link #HIT_PRED} to the
     * result if one is encountered.
     * @param addEOF Add {@link Token#EOF} to the result if the end of the
     * outermost context is reached. This parameter has no effect if {@code ctx}
     * is {@link PredictionContext#EMPTY_LOCAL}.
     */
    protected _LOOK(s: ATNState, stopState: ATNState | undefined, ctx: PredictionContext, look: IntervalSet, lookBusy: Array2DHashSet<ATNConfig>, calledRuleStack: BitSet, seeThruPreds: boolean, addEOF: boolean): void;
}
