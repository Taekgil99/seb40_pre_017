package com.backend.domain.vote.api;


import com.backend.domain.member.service.CustomUserDetailsService;
import com.backend.domain.vote.application.AnswerVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("question/?/answer/{answer-id}")
@RequiredArgsConstructor
@Validated
public class AnswerVoteController {
    private final AnswerVoteService answerVoteService;

    @PostMapping("/upvote")
    public ResponseEntity<Long> up(
            @PathVariable("answer-id") @Positive Long answerId,
            @AuthenticationPrincipal CustomUserDetailsService.MemberDetails memberDetails) {

        answerVoteService.up(answerId, 1L);


        return ResponseEntity.ok(answerId);
    }

    @PostMapping("/upvote/undo")
    public ResponseEntity<Long> undoUp(
            @PathVariable("answer-id") @Positive Long answerId,
            @AuthenticationPrincipal CustomUserDetailsService.MemberDetails memberDetails) {

        answerVoteService.undoUp(answerId, 1L);

        return ResponseEntity.ok(answerId);
    }

    @PostMapping("/downvote")
    public ResponseEntity<Long> down(
            @PathVariable("answer-id") @Positive Long answerId,
            @AuthenticationPrincipal CustomUserDetailsService.MemberDetails memberDetails) {

        answerVoteService.down(answerId, 1L);

        return ResponseEntity.ok(answerId);
    }

    @PostMapping("/downvote/undo")
    public ResponseEntity<Long> undoDown(
            @PathVariable("answer-id") @Positive Long answerId,
            @AuthenticationPrincipal CustomUserDetailsService.MemberDetails memberDetails) {

        answerVoteService.undoDown(answerId, 1L);

        return ResponseEntity.ok(answerId);
    }

}
