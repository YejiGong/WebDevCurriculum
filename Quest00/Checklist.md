#### 1.형상관리 시스템은 왜 나오게 되었을까요?
소프트웨어의 변경사항을 체계적으로 추적하고 통제하는 것으로, 개발 과정에서 직면할 수 있는 문제사항(이전 버전으로 되돌리기, 협업하기 등)을 해결하기 위하여 나왔을 것이다.

---
#### 2.git은 어떤 형상관리 시스템이고 어떤 특징을 갖고 있을까요? 분산형 형상관리 시스템이란 무엇일까요?
git은 형상관리시스템 중에서도 분산형 형상관리시스템이다.
snapshot-based며, 특히 delta-based snapshot method이다. 가장 최신 버전의 dat를 저장하고, 이전 버전은 delta로 저장한다.
분산형 형상관리시스템은 클라이언트가 clone을 할 수 있어, 각자가 local에서 작업을 하고 remote 저장소에 올리는 식으로의 작업이 가능하다.
즉, 매번 commit을 할 필요가 없어진다. 또한 중앙 서버에 문제가 생겨도 client의 repository에서 copy해올 수 있다.
뿐만 아니라 clone을 할 수 있으므로 hierachical development가 가능해진다.

#### 2-1.git은 어떻게 개발되게 되었을까요? git이 분산형 시스템을 채택한 이유는 무엇일까요?
git은 linux 프로젝트에서 사용하던 Archive-based 시스템에서, Linux의 사이즈가 커지면서 새로운 VCS의 필요성이 대두되면서 개발되었따.
그들은 빠르고, 심플하고, parallel development를 지원하고, 아주 큰 프로젝트도 효과적으로 운영할 수 있는 분산형 시스템을 원했기 때문에 git을 개발하게 되었다.

---

#### 3.git과 GitHub는 어떻게 다를까요?
git은 버전관리툴, 즉, 분산형 시스템으로 로컬에서 버전 관리를 하고, 소프트웨어 개발 및 소스 코드를 관리하는데에 사용한다.
GitHub는 git repository를 위한 웹 기반 호스팅 서비스로서, 클라우드 서버를 통해 로컬에서 버전 관리한 소스 코드를 업로드하여 공유할 수 있다.

---

#### 4.git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 떄 이용하나요? 그리고 어떻게 사용하나요?
- clone: remote repository가 "origin"으로 추가되고(git remote add origin 작업을 포함하는 것), remote repository에서 data를 가져온다(pull, full copy)
- add: local내의 파일에 변경된 목록을 staging area로 가져온다.
- commit: staging area에 있는 변경사항을 기록한다.
- push: commit 내역을 remote repository에 올린다. local의 branch에서 remote의 branch로 변경사항이 올라가는 것이다.
- pull: local에 적용되지 않은 remote repository의 변경사항을 내려받아 적용한다. 또한, remote branch와 local branch를 자동으로 병합해준다. (fetch의 경우 branch 병합 안함.)
- branch: git의 branch를 다룸.
- stash: 현재 작업중인 변경사항을 임시 공간에 저장해둠. (conflict가 나거나, commit하지 않고 branch 변경이 필요할 때 사용 가능)

---

#### 5.git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요? git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?
- object: git이 파일을 관리하기 위해 만드는 파일. tree, blob, commit, tag 4가지로 이루어짐.
- commit: git repository에 변경사항을 기록해준다. 
- head: 커밋을 가리키는 포인터. 현재 작업중인 branch를 가리킨다.
- branch: lightweight movable 포인트로, 개발의 diverge를 가능하게 하며 해당 branch내의 가장 최신의 commit 내역을 가리킨다. (새로운 commit이 발생하면 자동으로 이동함)
- tag: 특정 commit을 가리키는 것으로, static 포인터이다. 버전 관리에 이용된다.

---

#### 6.리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야할까요?
git reset, git revert, git rebase를 사용할 수 있다.
git rebase -i HEAD ~ N 으로 VIM interface를 사용할 수 있으며,
git revert HEAD~N을 통해 여러 커밋의 변경사항을 폐지시킬 수 있다.
git rebase --soft HEAD ~ N 으로 commit을 취소하거나, git rebase --mixed HEAD ~ N 으로 commit, staging을 취소하거나, git rebase --hard HEAD ~ N 로 commit, rebase, local change까지 취소할 수 있다.
