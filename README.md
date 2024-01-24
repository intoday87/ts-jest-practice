# ts-jest-practice

ts-jest로 테스트를 해볼수 있는 환경 구축

```zsh
# 전체 실행
$ yarn jest
# watch
$ yarn jest --watch
# 특정 파일 패턴 glob
$ yarn jest --testPathPattern src/someDir
```

yarn berry를 사용해서 prettier가 동작하지 않는 문제 해결
https://yarnpkg.com/getting-started/editor-sdks

```zsh
$ yarn dlx @yarnpkg/sdks vscode
```
