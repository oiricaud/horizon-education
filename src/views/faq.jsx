import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'typeface-roboto'
import {withStyles} from 'material-ui/styles';
import {CardMedia} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import ButtonQuestions from '../components/button-questions.jsx';

const styles = theme => ({
    banner: {
        height: 350,
    },
    paper: theme.mixins.gutters({
        paddingTop: 8,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
    }),
});

class Faq extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }
    render() {
        const classes = this.props.classes;
        const questions =
            [
                "What is a Network Administrator?",
                "What is a Medical Assistant?",
                "What is a Medical Billing & Office Procedure",
                "What is a Criminal Justice?",
                "What is a A+?",
                "What is a Phlebotomy?",
                "What is a Paralegal?",

                "How long does a Network Administrator program take to complete?",
                "How long does a Medical Assistant program take to complete?",
                "How long does a Medical Billing & Office Procedure program take to complete?",
                "How long does a Criminal Justice program take to complete?",
                "How long does a A+ program take to complete?",
                "How long does a Phlebotomy program take to complete?",
                "How long does a Paralegal program take to complete?",

                "Are there any hands on practices?",

                "What skills do Network Administrators obtain?",
                "What skills do Medical Assistant obtain?",
                "What skills do Medical Billing & Office Procedure obtain?",
                "What skills do Criminal Justice obtain?",
                "What skills do A+ obtain?",
                "What skills do Phlebotomy obtain?",
                "What skills do Paralegal obtain?",

                "What Certifications are included in the Program?",

                "What kind of degree or Diploma shall I receive from Horizon Education after graduation? ",

                "Where can I work after graduation?"
            ];
        const answers =
            [
                "The Network Administrator (IT) diploma program is designed to prepare students for entry level employment in the IT field. The program prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ & Net+ certifications expected by today’s employers. The Information Technology diploma program prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, Network Installer, and Field Service Technician. Upon completion of this program a Diploma is awarded",
                "The Medical Assisting diploma program is designed to provide students with an understanding of the medical office environment and administering to the needs of both patients and doctors. Students will have opportunities to study and learn about administrative, clinical, and laboratory procedures; phlebotomy; EKG procedures; medical terminology; anatomy and physiology; record keeping; insurance billing; and pharmacology. Job-seeking techniques and interpersonal skills are also addressed. Graduates of the Medical Assisting program will be prepared to seek employment in doctors’ offices, hospitals, and related businesses. Upon completion of the program, a Diploma is rewarded.",
                "The Medical Insurance Billing and Coding diploma program focuses on procedural knowledge of industry practices and close attention to details. The program includes instruction in the basic concepts and procedures necessary to perform the tasks associated with filling out health insurance forms, coding medical practice procedures, and medical terminology. Medical Insurance Billing and Coding (MIBC) professionals perform a variety of administrative health information functions, including those associated with organizing, analyzing, and technically evaluating health insurance claim forms and coding diseases, surgeries, medical procedures, and other therapies for billing. Graduates from the program may seek employment in hospitals, urgent care facilities, clinics, insurance companies, home healthcare agencies, and pharmaceutical companies. The program prepares individuals to work as medical insurance billing and coding clerks. Upon completion of the program, students will receive a Diploma.",
                "The Criminal Justice is designed to provide academic preparation in criminal law, legal procedures, court systems, law enforcement, and other related fields such as the fundamentals of law, corrections and various practices. The curriculum will prepare students to seek employment in the criminal justice profession. Upon completion of the program, students will receive an a Diploma.",
                "The A+ certification is designed to prepare students for entry level employment in the IT field. The A+ certification prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ certifications expected by today’s employers. The A+ prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, and Field Service Technician.",
                "Pharmacology Technician:This course will cover the anatomy and physiology of the cardiovascular system and address the legal and ethical issues associated with being a Phlebotomist. Students will be trained to perform a variety of blood collection methods using proper techniques and precautions including: vacuum collection devices, syringes, capillary skin puncture, butterfly needles, and blood cultures specimen collection on adults, children and infants. Emphasis will be placed on infection prevention; proper patient identification; proper labeling, handling, processing, and accessioning of specimens; quality assurance.",
                "This course gives a general overview of the legal system and the role of the paralegal within the system with regard to structure of the court system, administrative agencies, private law firm, and the public sector.",

                "10 Months",
                "10 Months",
                "10 Months",
                "15 Months",
                "2 Months",
                "2.5 Weeks",
                "2 Months",

                "Network Administrator - The course is 50/50, what that means is 50% hands on practices, and 50% reading, writing, exams, homework, lecture, etc… \n" +
                "Medical Assistant -The course is 65/35, what that means is 35% hands on practices, and 65% reading, writing, exams, homework, lecture, etc… \n" +
                "Medical Billing and Office Procedures\n  The course is 65/35, what that means is 35% hands on practices, and 65% reading, writing, exams, homework, lecture, etc… \n" +
                "No hands on for Criminal Justice",

                "The Network Administrator (IT) diploma program is designed to prepare students for entry level" +
                " employment in the IT field. The program prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ & Net+ certifications expected by today’s employers. The Information Technology diploma program prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, Network Installer, and Field Service Technician. Upon completion of this program a Diploma is awarded.",

                "The Medical Assisting diploma program is designed to provide students with an understanding of the medical office environment and administering to the needs of both patients and doctors. Students will have opportunities to study and learn about administrative, clinical, and laboratory procedures; phlebotomy; EKG procedures; medical terminology; anatomy and physiology; record keeping; insurance billing; and pharmacology. Job-seeking techniques and interpersonal skills are also addressed. Graduates of the Medical Assisting program will be prepared to seek employment in doctors’ offices, hospitals, and related businesses. Upon completion of the program, a Diploma is rewarded. ",

                "The Medical Insurance Billing and Coding diploma program focuses on procedural knowledge of industry practices and close attention to details. The program includes instruction in the basic concepts and procedures necessary to perform the tasks associated with filling out health insurance forms, coding medical practice procedures, and medical terminology. Medical Insurance Billing and Coding (MIBC) professionals perform a variety of administrative health information functions, including those associated with organizing, analyzing, and technically evaluating health insurance claim forms and coding diseases, surgeries, medical procedures, and other therapies for billing. Graduates from the program may seek employment in hospitals, urgent care facilities, clinics, insurance companies, home healthcare agencies, and pharmaceutical companies. The program prepares individuals to work as medical insurance billing and coding clerks. Upon completion of the program, students will receive a Diploma.",

                "The Criminal Justice is designed to provide academic preparation in criminal law, legal procedures, court systems, law enforcement, and other related fields such as the fundamentals of law, corrections and various practices. The curriculum will prepare students to seek employment in the criminal justice profession. Upon completion of the program, students will receive an a Diploma. ",

                "The A+ certification is designed to prepare students for entry level employment in the IT field. The A+ certification prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ certifications expected by today’s employers. The A+ prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, and Field Service Technician.",

                "This course will cover the anatomy and physiology of the cardiovascular system and address the legal and ethical issues associated with being a Phlebotomist. Students will be trained to perform a variety of blood collection methods using proper techniques and precautions including: vacuum collection devices, syringes, capillary skin puncture, butterfly needles, and blood cultures specimen collection on adults, children and infants. Emphasis will be placed on infection prevention; proper patient identification; proper labeling, handling, processing, and accessioning of specimens; quality assurance. ",

                "This course gives a general overview of the legal system and the role of the paralegal within the system with regard to structure of the court system, administrative agencies, private law firm, and the public sector.",

                "Upon satisfactory completion of all courses in a student’s program, Diplomas are awarded. Only" +
                " successful completion of the all requirements for graduation are met, is when a Diploma will be issued and will record of graduation from a program be posted to a student’s academic record. Only under certain circumstances a certificate of completion indicating certain amount of credit hours earned will be awarded if a student does not complete the necessary credit or courses for graduation. Credit transferred to other schools is left to the discretion of the institute. Contacting the" +
                " school that the student is planning to attend are urged to contact that school first. Some schools may or may not accept Horizon Education credits.",

                "NETWORK ADMINISTRATOR (IT)\n" +
                "The Network Administrator (IT) diploma program is designed to prepare students for entry level employment in the IT field. The program prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ & Net+ certifications expected by today’s employers. The Information Technology diploma program prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, Network Installer, and Field Service Technician. Upon completion of this program a Diploma is awarded." +

                "MEDICAL ASSISTING (MA)\n" +
                "\n" +
                "The Medical Assisting diploma program is designed to provide students with an understanding of the" +
                " medical office environment and administering to the needs of both patients and doctors. Students will have opportunities to study and learn about administrative, clinical, and laboratory procedures; phlebotomy; EKG procedures; medical terminology; anatomy and physiology; record keeping; insurance billing; and pharmacology. Job-seeking techniques and interpersonal skills are also addressed. Graduates of the Medical Assisting program will be prepared to seek employment in doctors’ offices, hospitals, and related businesses. Upon completion of the program, a Diploma is rewarded MEDICAL BILLING and OFFICE PROCEDURES (MBOP)\n" +
                "\n" +
                "The Medical Insurance Billing and Coding diploma program focuses on procedural knowledge of industry practices and close attention to details. The program includes instruction in the basic concepts and procedures necessary to perform the tasks associated with filling out health insurance forms, coding medical practice procedures, and medical terminology. Medical Insurance Billing and Coding (MIBC) professionals perform a variety of administrative health information functions, including those associated with organizing, analyzing, and technically evaluating health insurance claim forms and coding diseases, surgeries, medical procedures, and other therapies for billing. Graduates from the program may seek employment in hospitals, urgent care facilities, clinics, insurance companies, home healthcare agencies, and pharmaceutical companies. The program prepares individuals to work as medical insurance billing and coding clerks. Upon completion of the program, students will receive a Diploma." +
                "CRIMINAL JUSTICE (CJ)\n" +
                "\n" +
                "The Criminal Justice is designed to provide academic preparation in criminal law, legal procedures," +
                " court systems, law enforcement, and other related fields such as the fundamentals of law, corrections and various practices. The curriculum will prepare students to seek employment in the criminal justice profession. Upon completion of the program, students will receive an a Diploma. IT A+ (SEMINAR)\n" +
                "\n" +
                "The A+ certification is designed to prepare students for entry level employment in the IT field." +
                " The A+ certification prepares students with the skills and knowledge needed to set-up, maintain, troubleshoot, and repair computers and small computer networks. Graduates will leave the program with the hands-on experience, customer service skills, and A+ certifications expected by today’s employers. The A+ prepares graduates for positions such Help Desk Analyst, Customer Support Representative, Technical Support Specialist, and Field Service Technician. PHLEBOTOMY TECHNICIAN (SEMINAR) \n" +
                "\n" +
                "This course will cover the anatomy and physiology of the cardiovascular system and address the legal and ethical issues associated with being a Phlebotomist. Students will be trained to perform a variety of blood collection methods using proper techniques and precautions including: vacuum collection devices, syringes, capillary skin puncture, butterfly needles, and blood cultures specimen collection on adults, children and infants. Emphasis will be placed on infection prevention; proper patient identification; proper labeling, handling, processing, and accessioning of specimens; quality assurance.\n" +
                "PARALEGAL CERTIFICATION (SEMINAR) This course gives a general overview of the legal system and the role of the paralegal within the system with regard to structure of the court system, administrative agencies, private law firm, and the public sector."
            ];
        return (
            <div>
                <Paper className={classes.paper} elevation={10}>
                    <CardMedia
                        className={classes.banner}
                        image={process.env.PUBLIC_URL + 'banner/faq.jpg'}
                        title="Mountains banner"
                    />
                    <div>
                        <h1> Frequently Asked Questions </h1>
                    </div>

                    {questions.map(function (questions, index) {
                        return ( <ButtonQuestions question={questions} answer={answers[index]} key={index}/> )
                    })}
                </Paper>
            </div>
        );
    }
}

Faq.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Faq);