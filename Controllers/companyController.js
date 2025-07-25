const Company = require("../Models/companyModel");

const registerCompany = async (req, res) => {
    try {
        const { companyName } = req.body;
        if (!companyName || companyName == null) {
            return res.status(400).json({
                message: "Company name is required.",
                success: false
            });
        }
        let company = await Company.findOne({ name: companyName });
        if (company) {
            return res.status(400).json({
                success: false,
                message: "You can't register same company.",
            })
        };
        company = await Company.create({
            name: companyName,
            userId: req.id
        });

        return res.status(201).json({
            success: true,
            message: "Company registered successfully.",
            company,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
}


const getCompany = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({ userId });
        if (!companies) {
            return res.status(404).json({ success: false, message: "No company found.", })
        }
        return res.status(200).json({ success: true, companies, })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
}

const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            company,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
}

const updateCompany = async (req, res) => {
    try {
        const { name, description, website, location } = req.body;

        // const file = req.file;
        // // idhar cloudinary ayega
        // const fileUri = getDataUri(file);
        // const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
        // const logo = cloudResponse.secure_url;

        const updateData = { name, description, website, location };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true });

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message: "Company information updated.",
            success: true
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong.", error });
    }
}

module.exports = {
    registerCompany,
    getCompany,
    getCompanyById,
    updateCompany,
}