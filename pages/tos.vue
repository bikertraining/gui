<script setup lang="ts">
const route = useRoute();

const {getBusinessEmail, getBusinessPhone, getGuiUrl} = useUtils();

definePageMeta({
  auth: false,
  description: 'Terms of Service',
  keywords: 'tos, terms of service',
  title: 'Terms of Service'
});

useHead({
  title: `${route.meta['title']}`
});
</script>

<template>
  <h1
      class="fs-4 fw-bold mt-3 text-center">
    ONLINE TERMS OF SERVICE AGREEMENT
  </h1>

  <p>
    June 1, 2022
  </p>

  <p>
    PLEASE READ THE FOLLOWING TERMS OF SERVICE AGREEMENT CAREFULLY. BY ACCESSING OR USING OUR WEBSITE (THE
    "SITE") OR OUR SERVICES, YOU HEREBY AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS AND ALL TERMS
    INCORPORATED HEREIN BY REFERENCE. IT IS THE RESPONSIBILITY OF YOU, THE USER, CUSTOMER, OR PROSPECTIVE
    CUSTOMER TO READ THE TERMS AND CONDITIONS BEFORE PROCEEDING TO USE THIS SITE. IF YOU DO NOT EXPRESSLY AGREE
    TO ALL OF THE TERMS AND CONDITIONS, THEN PLEASE DO NOT ACCESS OR USE OUR SITE OR OUR SERVICES.
  </p>

  <p>
    The present terms and conditions (this "Agreement" or "Terms") is a legal agreement between you and Biker
    Training LLC (hereinafter), a company duly organized and validly existing, located at 92 Garfield Dr,
    Pensacola, Florida 32505. This Agreement annuls and voids all previous agreements.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Overview
  </p>

  <p>
    The Site ({{ getGuiUrl() }}) is operated by Biker Training LLC. Throughout the Site, the terms "we",
    "us" and "our" refer to offers this Site, including all information, tools and services available from this
    Site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices
    stated here.
  </p>

  <p>
    By visiting our Site and/or purchasing something from us, you engage in our "Service" and agree to be bound
    by the following terms and conditions, including those additional terms and conditions and policies
    referenced herein and/or available by hyperlink. These Terms apply to all users of the Site, including
    without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content. In
    the event of an inconsistency between this Agreement and any additional terms or policies referenced herein,
    the provisions of the additional terms or policies shall control.
  </p>

  <p>
    Please read these Terms carefully before accessing or using our Site. By accessing or using any part of the
    Site, you agree to be bound by these Terms. If you do not agree to all the Terms of this Agreement, then you
    may not access the Site or use any Service. If these Terms are considered an offer, acceptance is expressly
    limited to these Terms.
  </p>

  <p>
    Any new features or tools which are added to the current store shall also be subject to the Terms. You can
    review the most current version of the Terms at any time on this page. We reserve the right to update,
    change or replace any part of these Terms by posting updates and/or changes to our Site. It is your
    responsibility to check this page periodically for changes. Your continued use of or access to the Site
    following the posting of any changes constitutes acceptance of those changes.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    General Terms
  </p>

  <p>
    By agreeing to these Terms, you represent that you are at least the age of majority in your state or province
    of residence, or that you are the age of majority in your state or province of residence and you have given
    us your consent to allow any of your minor dependents to use this Site.
  </p>

  <p>
    You may not use our products or Site for any illegal or unauthorized purpose nor may you, in the use of our
    products or Site, violate any laws in your jurisdiction (including but not limited to motor vehicle
    laws).
  </p>

  <p>
    You must not transmit any worms or viruses or any code of a destructive nature.
  </p>

  <p>
    A breach or violation of any of the Terms will result in an immediate termination of your account and right
    to use our Service.
  </p>

  <p>
    We have the right, but not the obligation, to take any of the following actions in our sole discretion at any
    time and for any reason without giving you any prior notice:
  </p>

  <ul
      class="list-group list-group-numbered">
    <li
        class="list-group-item border-0">
      Restrict, suspend or terminate your access to all or any part of our Site;
    </li>

    <li
        class="list-group-item border-0">
      Change, suspend or discontinue all or any part of our products or Site;
    </li>

    <li
        class="list-group-item border-0">
      Refuse, move, or remove any content that is available on all or any part of our Site;
    </li>

    <li
        class="list-group-item border-0">
      Deactivate or delete your accounts;
    </li>

    <li
        class="list-group-item border-0">
      Establish general practices and limits concerning use of our Site.
    </li>
  </ul>

  <p
      class="mt-3">
    You agree that we will not be liable to you or any third party for taking any of these actions.
  </p>

  <p>
    You understand and agree that our Site may include communications such as service announcements and
    administrative or legal notices from us. Please note that you cannot opt out of receiving these notices.
  </p>

  <p>
    You understand that your content (not including credit card information), may be transferred unencrypted and
    involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical
    requirements of connecting networks or devices. Credit card information is always encrypted during transfer
    over networks.
  </p>

  <p>
    You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Site, use of the
    Site, or access to the Site or any contact on the Site, without express written permission by us.
  </p>

  <p>
    You may not modify, publish, transmit, reverse engineer, participate in the transfer or sale, create
    derivative works, or in any way exploit any of the content, in whole or in part, found on the Site. content
    is not for resale. Use of the Site does not entitle users to make any unauthorized use of any protected
    content, and in particular you will not delete or alter any proprietary rights or attribution notices in any
    content. You will use protected content solely for your personal use, and will make no other use of the
    content without the express written permission of and the copyright owner. You agree that you do not acquire
    any ownership rights in any protected content. We do not grant you any licenses, express or implied, to the
    intellectual property of or our licensors except as expressly authorized by these Terms.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Indemnity
  </p>

  <p>
    All users and/or members agree to insure and hold Biker Training LLC, our subsidiaries, affiliates, agents,
    employees, officers, partners and/or licensors blameless or not liable for any claim or demand, which may
    include, but is not limited to, reasonable attorney fees made by any third party which may arise from any
    content a member or user of our Site may submit, post, modify, transmit or otherwise make available through
    our Services, the use of Services or your connection with these Services, your violations of the Terms of
    Service and/or your violation of any such rights of another person.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Modifications
  </p>

  <p>
    Biker Training LLC reserves the right at any time it may deem fit, to modify, alter and or discontinue,
    whether temporarily or permanently, our service, or any part thereof, with or without prior notice. In
    addition, we shall not be held liable to you or to any third party for any such alteration, modification,
    suspension and/or discontinuance of our Services, or any part thereof.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Links
  </p>

  <p>
    Either Biker Training LLC or any third parties may provide links to other websites and/or resources. Thus,
    you acknowledge and agree that we are not responsible for the availability of any such external sites or
    resources, and as such, we do not endorse nor are we responsible or liable for any content, products,
    advertising or any other materials, on or available from such third-party sites or resources. Furthermore,
    you acknowledge and agree that Biker Training LLC shall not be responsible or liable, directly or
    indirectly, for any such damage or loss which may be a result of, caused or allegedly to be caused by or in
    connection with the use of or the reliance on any such content, goods or Services made available on or
    through any such site or resource.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Proprietary Rights
  </p>

  <p>
    You do hereby acknowledge and agree that Biker Training LLC's Services and any essential software that may be
    used in connection with our Services ("Software") shall contain proprietary and confidential material that
    is protected by applicable intellectual property rights and other laws. Furthermore, you herein acknowledge
    and agree that any Content which may be contained in any advertisements or information presented by and
    through our Services or by advertisers is protected by copyrights, trademarks, patents or other proprietary
    rights and laws. Therefore, except for that which is expressly permitted by applicable law or as authorized
    by Biker Training LLC or such applicable licensor, you agree not to alter, modify, lease, rent, loan, sell,
    distribute, transmit, broadcast, publicly perform and/or created any plagiaristic works which are based on
    Biker Training LLC Services (e.g. Content or Software), in whole or part.
  </p>

  <p>
    Biker Training LLC hereby grants you a personal, non-transferable and non-exclusive right and/or license to
    make use of the object code or our Software on a single computer, as long as you do not, and shall not,
    allow any third party to duplicate, alter, modify, create or plagiarize work from, reverse engineer, reverse
    assemble or otherwise make an attempt to locate or discern any source code, sell, assign, sublicense, grant
    a security interest in and/or otherwise transfer any such right in the Software. Furthermore, you do herein
    agree not to alter or change the Software in any manner, nature or form, and as such, not to use any
    modified versions of the Software, including and without limitation, for the purpose of obtaining
    unauthorized access to our Services. Lastly, you also agree not to access or attempt to access our Services
    through any means other than through the interface which is provided by Biker Training LLC for use in
    accessing our Services.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Warranty Disclaimers
  </p>

  <p>
    YOU HEREIN EXPRESSLY ACKNOWLEDGE AND AGREE THAT:
  </p>

  <ul
      class="list-group list-group-numbered">
    <li
        class="list-group-item border-0">
      THE USE OF BIKER TRAINING LLC SERVICES AND SOFTWARE ARE AT THE SOLE
      RISK BY YOU. OUR SERVICES AND SOFTWARE SHALL BE PROVIDED ON AN "AS IS"
      AND/OR "AS AVAILABLE" BASIS.
      BIKER TRAINING LLC AND OUR SUBSIDIARIES, AFFILIATES, OFFICERS,
      EMPLOYEES, AGENTS, PARTNERS AND LICENSORS
      EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES OF ANY KIND WHETHER EXPRESSED
      OR IMPLIED, INCLUDING, BUT NOT
      LIMITED TO ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS
      FOR A PARTICULAR PURPOSE AND
      NON-INFRINGEMENT.
    </li>

    <li
        class="list-group-item border-0">
      BIKER TRAINING LLC AND OUR SUBSIDIARIES, OFFICERS, EMPLOYEES, AGENTS,
      PARTNERS AND LICENSORS MAKE NO SUCH WARRANTIES THAT (i) BIKER TRAINING
      LLC SERVICES OR SOFTWARE WILL
      MEET YOUR REQUIREMENTS; (ii) BIKER TRAINING LLC SERVICES OR SOFTWARE
      SHALL BE UNINTERRUPTED, TIMELY,
      SECURE OR ERROR-FREE; (iii) THAT SUCH RESULTS WHICH MAY BE OBTAINED
      FROM THE USE OF THE BIKER TRAINING
      LLC SERVICES OR SOFTWARE WILL BE ACCURATE OR RELIABLE; (iv) QUALITY OF
      ANY PRODUCTS, SERVICES, ANY
      INFORMATION OR OTHER MATERIAL WHICH MAY BE PURCHASED OR OBTAINED BY YOU
      THROUGH OUR SERVICES OR SOFTWARE
      WILL MEET YOUR EXPECTATIONS; AND (v) THAT ANY SUCH ERRORS CONTAINED IN
      THE SOFTWARE SHALL BE CORRECTED.
    </li>

    <li
        class="list-group-item border-0">
      ANY INFORMATION OR MATERIAL DOWNLOADED OR OTHERWISE OBTAINED BY WAY OF
      BIKER TRAINING LLC SERVICES OR SOFTWARE SHALL BE ACCESSED BY YOUR SOLE
      DISCRETION AND SOLE RISK, AND AS
      SUCH YOU SHALL BE SOLELY RESPONSIBLE FOR AND HEREBY WAIVE ANY AND ALL
      CLAIMS AND CAUSES OF ACTION WITH
      RESPECT TO ANY DAMAGE TO YOUR COMPUTER AND/OR INTERNET ACCESS,
      DOWNLOADING AND/OR DISPLAYING, OR FOR ANY
      LOSS OF DATA THAT COULD RESULT FROM THE DOWNLOAD OF ANY SUCH
      INFORMATION OR MATERIAL.
    </li>

    <li
        class="list-group-item border-0">
      NO ADVICE AND/OR INFORMATION, DESPITE WHETHER WRITTEN OR ORAL, THAT MAY
      BE OBTAINED BY YOU FROM BIKER TRAINING LLC OR BY WAY OF OR FROM OUR
      SERVICES OR SOFTWARE SHALL CREATE
      ANY WARRANTY NOT EXPRESSLY STATED IN THE TERMS.
    </li>

    <li
        class="list-group-item border-0">
      A SMALL PERCENTAGE OF SOME USERS MAY EXPERIENCE SOME DEGREE OF
      EPILEPTIC SEIZURE WHEN EXPOSED TO CERTAIN LIGHT PATTERNS OR BACKGROUNDS
      THAT MAY BE CONTAINED ON A
      COMPUTER SCREEN OR WHILE USING OUR SERVICES. CERTAIN CONDITIONS MAY
      INDUCE A PREVIOUSLY UNKNOWN
      CONDITION OR UNDETECTED EPILEPTIC SYMPTOM IN USERS WHO HAVE SHOWN NO
      HISTORY OF ANY PRIOR SEIZURE OR
      EPILEPSY. SHOULD YOU, ANYONE YOU KNOW OR ANYONE IN YOUR FAMILY HAVE AN
      EPILEPTIC CONDITION, PLEASE
      CONSULT A PHYSICIAN IF YOU EXPERIENCE ANY OF THE FOLLOWING SYMPTOMS
      WHILE USING OUR SERVICES: DIZZINESS,
      ALTERED VISION, EYE OR MUSCLE TWITCHES, LOSS OF AWARENESS,
      DISORIENTATION, ANY INVOLUNTARY MOVEMENT, OR
      CONVULSIONS.
    </li>
  </ul>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Limitation of Liability
  </p>

  <p>
    YOU EXPLICITLY ACKNOWLEDGE, UNDERSTAND AND AGREE THAT BIKER TRAINING LLC AND OUR SUBSIDIARIES, AFFILIATES,
    OFFICERS, EMPLOYEES, AGENTS, PARTNERS AND LICENSORS SHALL NOT BE LIABLE TO YOU FOR ANY PUNITIVE, INDIRECT,
    INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DAMAGES WHICH MAY BE
    RELATED TO THE LOSS OF ANY PROFITS, GOODWILL, USE, DATA AND/OR OTHER INTANGIBLE LOSSES, EVEN THOUGH WE MAY
    HAVE BEEN ADVISED OF SUCH POSSIBILITY THAT SAID DAMAGES MAY OCCUR, AND RESULT FROM:
  </p>

  <ul
      class="list-group list-group-numbered">
    <li
        class="list-group-item border-0">
      THE USE OR INABILITY TO USE OUR SERVICE;
    </li>

    <li
        class="list-group-item border-0">
      THE COST OF PROCURING SUBSTITUTE GOODS AND SERVICES;
    </li>

    <li
        class="list-group-item border-0">
      UNAUTHORIZED ACCESS TO OR THE ALTERATION OF YOUR TRANSMISSIONS AND/OR DATA;
    </li>

    <li
        class="list-group-item border-0">
      STATEMENTS OR CONDUCT OF ANY SUCH THIRD PARTY ON OUR SERVICE;
    </li>

    <li
        class="list-group-item border-0">
      AND ANY OTHER MATTER WHICH MAY BE RELATED TO OUR SERVICE.
    </li>
  </ul>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Release
  </p>

  <p>
    In the event you have a dispute, you agree to release Biker Training LLC (and its officers, directors,
    employees, agents, parent subsidiaries, affiliates, co-branders, partners and any other third parties) from
    claims, demands and damages (actual and consequential) of every kind and nature, known and unknown,
    suspected or unsuspected, disclosed and undisclosed, arising out of or in any way connected to such
    dispute.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Notice
  </p>

  <p>
    Biker Training LLC may furnish you with notices, including those with regards to any changes to the Terms,
    including but not limited to email, regular mail, MMS or SMS, text messaging, postings on our website
    Services, or other reasonable means currently known or any which may be herein after developed. Any such
    notices may not be received if you violate any aspects of the Terms by accessing our Services in an
    unauthorized manner. Your acceptance of this Agreement constitutes your agreement that you are deemed to
    have received any and all notices that would have been delivered had you accessed our Services in an
    authorized manner.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Intellectual Property Rights
  </p>

  <p>
    You herein acknowledge, understand and agree that all of the Biker Training LLC trademarks, copyright, trade
    name, service marks, and other Biker Training LLC logos and any brand features, and/or product and service
    names are trademarks and as such, are and shall remain the property of Biker Training LLC. You herein agree
    not to display and/or use in any manner the Biker Training LLC logo or marks without obtaining Biker
    Training LLC's prior written consent.
  </p>

  <p>
    Biker Training LLC will always respect the intellectual property of others, and we ask that all of our users
    do the same. With regards to appropriate circumstances and at its sole discretion, Biker Training LLC may
    disable and/or terminate the accounts of any user who violates our Terms and/or infringes the rights of
    others. If you feel that your work has been duplicated in such a way that would constitute copyright
    infringement, or if you believe your intellectual property rights have been otherwise violated, you should
    provide to us the following information:
  </p>

  <ul
      class="list-group list-group-numbered">
    <li
        class="list-group-item border-0">
      The electronic or the physical signature of the individual that is authorized on behalf of the owner of the
      copyright or other intellectual property interest;
    </li>

    <li
        class="list-group-item border-0">
      A description of the copyrighted work or other intellectual property that you believe has been infringed upon;
    </li>

    <li
        class="list-group-item border-0">
      A description of the location of the site which you allege has been infringing upon your work;
    </li>

    <li
        class="list-group-item border-0">
      Your physical address, telephone number, and email address;
    </li>

    <li
        class="list-group-item border-0">
      A statement, in which you state that the alleged and disputed use of your work is not authorized by the copyright
      owner, its agents or the law;
    </li>

    <li
        class="list-group-item border-0">
      And finally, a statement, made under penalty of perjury, that the aforementioned information in your notice is
      truthful and accurate, and that you are the copyright or intellectual property owner, representative or agent
      authorized to act on the copyright or intellectual property owner's behalf.
    </li>
  </ul>

  <p
      class="mt-3">
    The Biker Training LLC agent for notice of claims of copyright or other intellectual property infringement
    can be contacted as follows:
  </p>

  <p>
    <span
        class="fw-bold">
      Email:
    </span>

    {{ getBusinessEmail() }}
  </p>

  <p>
    <span
        class="fw-bold">
      Telephone Number:
    </span>

    {{ getBusinessPhone(false) }}
  </p>

  <p>
    <span
        class="fw-bold">
      Mailing Address:
    </span>

    <br>Biker Training LLC
    <br>92 South Garfield Drive
    <br>Pensacola, Florida
    <br>32505
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Entire Agreement
  </p>

  <p>
    This Agreement constitutes the entire agreement between you and Biker Training LLC and shall govern the use
    of our Services, superseding any prior version of this Agreement between you and us with respect to Biker
    Training LLC Services. You may also be subject to additional terms and conditions that may apply when you
    use or purchase certain other Biker Training LLC Services, affiliate Services, third-party content or
    third-party software.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Choice of Law and Forum
  </p>

  <p>
    It is at the mutual agreement of both you and Biker Training LLC with regard to the Agreement that the
    relationship between the parties shall be governed by the laws of the state of Florida without regard to its
    conflict of law provisions and that any and all claims, causes of action and/or disputes, arising out of or
    relating to the Agreement, or the relationship between you and Biker Training LLC, shall be filed within the
    courts having jurisdiction within the County of Escambia, Florida or the U.S. District Court located in said
    state. You and Biker Training LLC agree to submit to the jurisdiction of the courts as previously mentioned,
    and agree to waive any and all objections to the exercise of jurisdiction over the parties by such courts
    and to venue in such courts.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Waiver and Severability of Terms
  </p>

  <p>
    At any time, should Biker Training LLC fail to exercise or enforce any right or provision of the Agreement,
    such failure shall not constitute a waiver of such right or provision. If any provision of this Agreement is
    found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court
    should endeavor to give effect to the parties' intentions as reflected in the provision, and the other
    provisions of the Agreement remain in full force and effect.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Statute of Limitations
  </p>

  <p>
    You acknowledge, understand and agree that regardless of any statute or law to the contrary, any claim or
    action arising out of or related to the use of our Services or the Agreement must be filed within 1 year(s)
    after said claim or cause of action arose or shall be forever barred.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Violations
  </p>

  <p>
    Please report any and all violations of this Agreement to Biker Training LLC as follows:
  </p>

  <p>
    <span
        class="fw-bold">
      Email:
    </span>

    {{ getBusinessEmail() }}
  </p>

  <p>
    <span
        class="fw-bold">
      Telephone Number:
    </span>

    {{ getBusinessPhone(false) }}
  </p>

  <p>
    <span
        class="fw-bold">
      Mailing Address:
    </span>

    <br>Biker Training LLC
    <br>92 South Garfield Drive
    <br>Pensacola, Florida
    <br>32505
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Government Requests
  </p>

  <p>
    In order to cooperate with governmental requests, subpoenas or court orders, to protect our systems, or to
    ensure the integrity and operation of our business and systems, we may access and disclose any information
    we consider necessary or appropriate, including and without limitation, your information, IP address, and
    usage history. Our right to disclose any such information is governed by the terms of our Privacy
    Policy.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Foreign Access of Site
  </p>

  <p>
    The Site is controlled, operated and administered by from our offices within the USA. If you access the Site
    from a location outside the USA, you are responsible for compliance with all local laws. You agree that you
    will not use 's content accessed through the Site in any country or in any manner prohibited by any
    applicable laws, restrictions or regulations.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Errors, Inaccuracies, and Omissions
  </p>

  <p>
    Occasionally there may be information on our Site that contains typographical errors, inaccuracies or
    omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges,
    transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and
    to change or update information or cancel orders if any information on the Site or on any related Site is
    inaccurate at any time without prior notice (including after you have submitted your order).
  </p>

  <p>
    We undertake no obligation to update, amend or clarify information on the Site or on any related Site,
    including without limitation, pricing information, except as required by law. No specified update or refresh
    date applied on the Site or on any related Site, should be taken to indicate that all information on the
    Site or on any related Site has been modified or updated.
  </p>

  <p
      class="fw-bold mt-3 text-decoration-underline">
    Privacy Policy
  </p>

  <p>
    Every member's registration data and various other personal information are strictly protected by the Biker
    Training LLC Online Privacy Policy (see the full Privacy Policy at {{ getGuiUrl() }}/privacy). As a
    member, you herein consent to the collection and use of the information provided, including the transfer of
    information within the United States and/or other countries for storage, processing or use by Biker Training
    LLC and/or our subsidiaries and affiliates.
  </p>
</template>

<style scoped>

</style>