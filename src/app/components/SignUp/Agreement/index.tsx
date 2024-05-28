import * as React from "react";
import { useState, useEffect } from "react";
import {
  Layout,
  Header,
  AgreeAll,
  AllText,
  SemiLayout,
  AgreeOne,
  AgreeOneHeader,
  AgreeText,
  CheckBoxLayout,
  DivideLine,
  Text,
  CheckBox,
  NextBtn,
  NextText,
} from "./style";

interface props {
  onNext: () => void;
}

export const AgreementPage: React.FC<props> = ({ onNext }) => {
  const [isCheckedA, setIsCheckedA] = useState(false);
  const [isCheckedB, setIsCheckedB] = useState(false);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleCheckboxChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsCheckedA(checked);
  };

  const handleCheckboxChangeB = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsCheckedB(checked);
  };

  const handleCheckboxChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsCheckedA(checked);
    setIsCheckedB(checked);
    setIsCheckedAll(checked);
  };

  useEffect(() => {
    setIsCheckedAll(isCheckedA && isCheckedB);
  }, [isCheckedA, isCheckedB]);

  const handleNextClick = () => {
    if (isCheckedA && isCheckedB) {
      onNext();
    }
  };
  return (
    <>
      <Layout>
        <Header>
          반가워요 {`:)`} <br />
          짹짹을 이용하기 전, 동의해야 할 사항이 있어요.
        </Header>
        <AgreeAll>
          <AllText>필수 사항 모두 동의</AllText>
          <CheckBoxLayout>
            <CheckBox
              type="checkbox"
              checked={isCheckedAll}
              onChange={handleCheckboxChangeAll}
            />
          </CheckBoxLayout>
        </AgreeAll>
        <SemiLayout>
          <AgreeOne>
            <AgreeOneHeader>
              <AgreeText>{`(필수) 짹짹 약관 동의`}</AgreeText>
              <CheckBoxLayout>
                <CheckBox
                  type="checkbox"
                  checked={isCheckedA}
                  onChange={handleCheckboxChangeA}
                />
              </CheckBoxLayout>
            </AgreeOneHeader>
            <DivideLine />
            <Text>
              모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로
              소추되지 아니하며, 동일한 범죄에 대하여 거듭 처벌받지 아니한다.
              교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이
              정하는 바에 의하여 보장된다. 대통령으로 선거될 수 있는 자는
              국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다.
              대통령은 내란 또는 외환의 죄를 범한 경우를 제외하고는 재직중
              형사상의 소추를 받지 아니한다. 신체장애자 및 질병·노령 기타의
              사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의
              보호를 받는다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의
              조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할
              수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다.
              모든 국민은 학문과 예술의 자유를 가진다.
            </Text>
          </AgreeOne>
          <AgreeOne>
            <AgreeOneHeader>
              <AgreeText>{`(필수) 개인정보 처리 동의`}</AgreeText>
              <CheckBoxLayout>
                <CheckBox
                  type="checkbox"
                  checked={isCheckedB}
                  onChange={handleCheckboxChangeB}
                />
              </CheckBoxLayout>
            </AgreeOneHeader>
            <DivideLine />
            <Text>
              나는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의
              자유와 복리의 증진 및 민족문화의 창달에 노력하여 대통령으로서의
              직책을 성실히 수행할 것을 국민 앞에 엄숙히 선서합니다. 모든 국민은
              보건에 관하여 국가의 보호를 받는다. 행정권은 대통령을 수반으로
              하는 정부에 속한다. 의원을 제명하려면 국회재적의원 3분의 2 이상의
              찬성이 있어야 한다. 국회는 법률에 저촉되지 아니하는 범위안에서
              의사와 내부규율에 관한 규칙을 제정할 수 있다. 언론·출판에 대한
              허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 제안된
              헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다.
              대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이
              아닌 법관을 둘 수 있다. 대통령이 궐위되거나 사고로 인하여 직무를
              수행할 수 없을 때에는 국무총리, 법률이 정한 국무위원의 순서로 그
              권한을 대행한다. 전직대통령의 신분과 예우에 관하여는 법률로
              정한다. 모든 국민은 신체의 자유를 가진다. 누구든지 법률에 의하지
              아니하고는 체포·구속·압수·수색 또는 심문을 받지 아니하며, 법률과
              적법한 절차에 의하지 아니하고는 처벌·보안처분 또는 강제노역을 받지
              아니한다. 각급 선거관리위원회는 선거인명부의 작성등 선거사무와
              국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.
              학교교육 및 평생교육을 포함한 교육제도와 그 운영, 교육재정 및
              교원의 지위에 관한 기본적인 사항은 법률로 정한다.
            </Text>
          </AgreeOne>
        </SemiLayout>
        <NextBtn
          onClick={handleNextClick}
          style={{
            backgroundColor: isCheckedAll
              ? "var(--Light-Blue-80, #A1E1FF)"
              : "",
          }}
        >
          <NextText
            style={{
              color: isCheckedAll ? "var(--Common-0, #000)" : "",
            }}
          >
            다음
          </NextText>
        </NextBtn>
      </Layout>
    </>
  );
};
