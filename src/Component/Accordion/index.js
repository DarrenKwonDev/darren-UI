import React, { useEffect } from "react";
import StyledAccordion, { AccordionLecture } from "./style";

function Accordion() {
  // next라서 document is not found 에러를 피하기 위함
  useEffect(() => {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
      // 각 아코디언 헤더에 onClick 이벤트를 달아줌
      accordions[i].onclick = function () {
        this.classList.toggle("is-open"); // is-open class 붙여주고

        const content = this.nextElementSibling; // 다음 dom 요소 즉, accordion-content
        if (content.style.maxHeight) {
          // accordion is currently open, so close it
          content.style.maxHeight = null;
        } else {
          // accordion is currently closed, so open it
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    }
  }, []);

  return (
    <StyledAccordion>
      <button className="accordion">Accordian #1</button>
      <div className="accordion-content">
        <AccordionLecture>
          강의 1 - 한국어를 배워야 하는 이유, 한국어가 쉬운 이유
        </AccordionLecture>
        <AccordionLecture>강의 2 - 한국어 맛보기</AccordionLecture>
        <AccordionLecture>
          강의 3 - 강의를 본격적으로 시작하기 전에
        </AccordionLecture>
      </div>

      <button className="accordion">Accordian #2</button>
      <div className="accordion-content">
        <AccordionLecture>강의 1 - 한글 자/모</AccordionLecture>
      </div>

      <button className="accordion">Accordian #3</button>
      <div className="accordion-content">
        <AccordionLecture>강의 1 - 한국어 발음</AccordionLecture>
      </div>
    </StyledAccordion>
  );
}

export default Accordion;
