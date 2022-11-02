package com.backend.global.error.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    INVALID_INPUT_VALUE(400, "Invalid Input Value"),
    ENTITY_NOT_FOUND(400, " Entity Not Found"),
    INTERNAL_SERVER_ERROR(500, "Server Error"),
    HANDLE_ACCESS_DENIED(403, "Access is Denied"),
    METHOD_NOT_ALLOWED(405, " Invalid Input Value"),
    CONSTRAINTS_VIOLATED(404, "Constraints Violated"),

    // Member
    EMAIL_DUPLICATION(409, "Email Is Duplication"),
    MEMBER_NOT_FOUND(400, "Can't Find This Member"),
    LOGIN_FAILED(400, "Login input is invalid"),
    NOT_LOGIN_MEMBER(400, "Not Login Member"),

    // Token
    TOKEN_NOT_FOUND(400, "Token Not Found"),
    TOKEN_EXPIRED(400, "Token Expired"),
    TOKEN_INVALID(400, "Token Invalid"),
    TOKEN_SIGNATURE_INVALID(400, "Token Signature Invalid"),
    TOKEN_MALFORMED(400, "Token Malformed"),
    TOKEN_UNSUPPORTED(400, "Token Unsupported"),
    TOKEN_ILLEGAL_ARGUMENT(400, "Token Illegal Argument"),


    //Question
    QUESTION_NOT_FOUND(404, "Question Not Found"),
    TITLE_DUPLICATION(409, "Title Is Duplication"),
    NO_SUCH_ELEMENT(404, "No Such Element"),
    NOT_QUESTION_WRITER(400, "Not Question Writer"),

    //Answer
    ANSWER_NOT_FOUND(404, "Answer Not Found"),


    //Tag
    TAG_NOT_FOUND(404, "Tag Not Found"),

    //Comment
    COMMENT_NOT_FOUND(404, "Comment Not Found"),

    //Vote
    VOTE_NOT_FOUND(404, "Vote Not Found");


    private final String message;
    private int status;

    ErrorCode(final int status, final String message) {
        this.message = message;
        this.status = status;
    }
}

