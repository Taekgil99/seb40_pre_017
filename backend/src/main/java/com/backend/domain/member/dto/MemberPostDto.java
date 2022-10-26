package com.backend.domain.member.dto;

import com.backend.domain.member.domain.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto {

    @Email(message = "이메일 형식이 아닙니다.")
    @NotBlank(message = "이메일을 입력해주세요.")
    private String email;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String password;

    @NotBlank(message = "닉네임을 입력해주세요.")
    private String username;


    private String profileImage;
    private Long reputation;

    public Member toEntity() {
        return Member.builder()
                .email(email)
                .password(password)
                .username(username)
                .profileImage("https://imgur.com/gallery/5tMeN")
                .reputation(0L)
                .build();
    }
}
