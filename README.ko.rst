내가 낸 세금은 어디에 쓰일까?
=============================

이 기록은 두개의 기능을 제공합니다. 하나는 "내가 낸 세금은 어디에 쓰일까?"웹 사이트의
소스 코드이고, 또 예산 집행 시각화 사이트를 위한 템플릿으로도 쓰일 수 있습니다.

`Where Does My Money Go?`_ 는 UK의 공공 지출을 분석, 시작화함으로써 투명성 증대와
시민 연대에 목적을 두고있습니다. 이 사이트는 2009년에 공개되어 세계각국의 정부 재정을
추적하기 위한 `OpenSpending`_ 프로젝트를 만들기 위해 2010년에 `OffenerHaushalt`_ 와
합병했습니다.

.. _`Where Does My Money Go?`: http://wheredoesmymoneygo.org
.. _`OffenerHaushalt`: http://offenerhaushalt.de
.. _`OpenSpending`: http://openspending.org

이 저장소에는 무엇이 있나요?
---------------------------


Where Does My Money Go는 `OpenSpending`_ 의 위에 있는 매플리케이션으로써 실행됩니다.
모든 데이터는 플렛폼에 저장되어있고 시각화와 검색은 `API`_ 를 통해 직접 운영됩니다.

.. _`OpenSpending`: http://openspending.org
.. _`API`: http://openspending.org/help/api.html

저장소에는 트위터의 `Bootstrap 2`_ CSS 프레임워크로 만든 사이트를 위한 기본 레이아웃이
포함되어 있고, Jekyll기반의 스켈레톤 사이트, 스테틱 웹사이트를 위한 간단한 제너레이터
툴이 포함되어 있습니다. 키 컴포넌트는 대부분의 위젯을 임베이딩하는 코드 셈플입니다.
이는 현제 OpenSpending에서 사용하실 수 있습니다.

.. _`Bootstrap 2`: http://twitter.github.com/bootstrap/

* ``bubbletree.html`` 는 전통적인 `BubbleTree <https://github.com/okfn/bubbletree>`_
  다이어그램을 가지고 있습니다. 이는 쉽게 멀티-레벨 계층(UK 예산안의 COFOG 코드 같은
  것)의 분해하는데 사용할 수 있습니다.
* ``bubbletree-map.html`` 는 BubbleTree와 UK의 간단한 백터맵을 합칩니다. 이는 커스텀
  사이트에 도입하려면 일이 더 필요하지만, 뷰가 아름다우므로 노력할 가치는 있습니다.
* ``dailybread.html`` 는 Daily Bread 커스텀 세금 뷰어를 포함합니다. 이는 방문자의
  대략적인 세금 공헌으로 정부 지출을 분해합니다.
* ``spending.html`` 는 전통적인 지출 정보를 위한 검색 인터페이스 입니다. 이 예제에서는
  UK의 부처별 지출에서 사용했습니다. 이는 적절한 집계를 하기에는 구조화가 덜 되어 있지만
  세부적으로 흥미로운 정보가 있는 데이터셋에 유용합니다.


어떻게 나의 나라/지역의 예산 사이트를 만드나요?
------------------------------------------------------

당신의 나라의 예산 모니터링 사이트를 만드려고 한다면, 일부 예산 지출 데이터를 취득해서
사이트의 웹 인터페이스를 사용해 `OpenSpending에 로드해야 합니다`_. 데이터가 로드되면
`이 저장소를 포크`_ 해서 타이틀을 바꾸고, 개인적인 필요에 따라 스타일과 배치를 바꾸시면
됩니다. 마지막으로, 호스트는 직접하시거나 `GitHub Pages`_ 를 이용하실 수 있습니다.

.. _`OpenSpending에 로드해야 합니다`: http://wiki.openspending.org/Loading_into_OpenSpending
.. _`이 저장소를 포크`: http://help.github.com/fork-a-repo/
.. _`GitHub Pages`: http://pages.github.com/


어떻게 사이트를 만드나요?
------------------------

이 저장소에 있는 페이지는 루비기반 스테틱 사이트 제너레이터인 `Jekyll`_ 을 사용해
``_layouts/default.html`` 에 있는 템플릿과 합쳐서 마지막 형태를 만듭니다. 사이트를
만드려면 먼저 `Jekyll을 인스톨` 할 필요가 있습니다. (Mac OS X 나 Linux의 경우)::

  sudo gem install jekyll

Windows를 위한 좋은 투토리얼은 `여기`_ 를 참고하세요.

그리고 그냥 빌드하거나 저장소의 루트 디랙토리에서 이 명령어를 실행해 로컬 웹 서버를
띄울 수도 있습니다::

  jekyll serve --watch

어떤 이유로 jekyll을 인스톨할 수 없다해도, 변경할 때마다 사이트를 배포해 실험해 볼
수 있습니다.

사이트를 디플로이하는 가장 쉬운방법은 GitHub pages를 사용하는 것입니다. 사용하려면
``CNAME`` 파일만 루트에 추가해 ``gh-pages`` 브랜치에 푸쉬하면 됩니다. 모든 페이지는
자동으로 배포되고 빌드 될 것입니다.

.. _`Jekyll`: https://github.com/mojombo/jekyll
.. _`Jekyll을 인스톨`: https://github.com/mojombo/jekyll/wiki/install
.. _`여기`: http://www.madhur.co.in/blog/2011/09/01/runningjekyllwindows.html


사이트를 만들때 어떤 최적화를 해야 하나요?
----------------------------------------------------------

새로운 릴리즈 전의(white-label) 사이트를 만들때, 몇가지 쉽게할 수 있는 개조가 있습니다.

* ``_config.yml`` 파일을 수정해 전채 사이트의 타이틀이나 몇가지 기본 파라메터를 변경해
  OpenSpending 설치 등을 사용할 수있습니다. 더 많은 설정 옵션 대부분 페이지 생성 관련
  기능을 Jekyll에서 사용할 수 있습니다.
* 각 위젯을 위한 JavaScript 초기화는 커스터마이징이 필요합니다. 특히 데이터 셋의 이름과
  BubbleTree와 DailyBread를 위한 차원은 적절히 설정할 필요가 있습니다.
* ``css/style.css`` 에 커스텀 테마를 위한 스타일 시트를 적용합니다. 특히 폰트와 색상을
  조정하세요.
* ``img/logo.png`` 를 커스텀 로고로 교체할 수 있습니다.
* 프로젝트의 메뉴나 그 밖의 페이지요소를 늘리거나 줄이는 등의 기본 HTML 구조를
  ``_layouts/default.html`` 에서 수정할 수 있습니다.

OpenSpending이라 불리우는 API에 관련된 용어나 개념에 대해 이해하시려면 몇 분을 들여
기술적 배경을 읽어보세요:
`OpenSpending이 어떻게 데이터를 저장하나? <http://openspending.org/help/api-olap.html>`_


어디서 도움을 받을 수 있나요?
---------------------

Where Does My Money Go? 저장소는 커뮤니티의 지원으로 만든 리소스가 있고, 필요에 따라
커스터마이징할때 도움을 얻을 수 있는 곳이 몇군데 있습니다.

* `OpenSpending 개발자 리스트 <http://lists.okfn.org/mailman/listinfo/openspending-dev>`_
* GitHub 의 `Issue Tracker <https://github.com/openspending/wheredoesmymoneygo.org/issues>`_
  (어떤 문제든 등록하세요.
* FreeNode IRC의 ``#openspending`` 체널에도 참가하세요

또한 OpenSpending 팀은 또한 커스텀 시각화를 만들거나 지출 데이터에 관련된 특정 질문에
대한 답변을 하는등 정부 예산에 관한 커스터마이징 된 사이트를 위한 맞춤형 지원를 제공하고
있습니다.

추가적인 지원은 서비스 수준 계약과 함께 제공하며, 마감 임박의 프로젝트나 새로운 타입의
시각화, 고비용 장기 프로젝트에 적당합니다. 우리가 무엇을 할 수 있는지 관심이 있으시다면
OpenSpending 프로젝트의 이메일 info@openspending.org로 연락해주세요. 기꺼히 일해드립니다.

